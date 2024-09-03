import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./view/Dashboard";
import DataTable from "./view/DataTable";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retryDelay: 1000,
      retry: 0,
      staleTime: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: (err: AxiosError | unknown) => {
        if (axios.isAxiosError(err)) {
          toast.error(err.response?.data?.message || "Something went wrong");
          return err;
        }
        toast.error("Something went wrong");
      },
    },
  },
});

function App() {
  const [date, setDate] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<"DASHBOARD" | "DATA_TABLE">(
    "DASHBOARD"
  );

  const onChangeView = (view: "DASHBOARD" | "DATA_TABLE") => {
    setActiveView(view);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main className="h-screen w-screen p-4 bg-gray-50 overflow-hidden">
        <div className="grid grid-cols-6 gap-4 w-full h-full">
          <Sidebar activeView={activeView} onChangeView={onChangeView} />
          <div className="col-span-5 w-full">
            <div className="grid grid-col-7 w-full gap-4">
              <Navbar activeView={activeView} setDate={setDate} />
              {activeView === "DATA_TABLE" ? (
                <DataTable />
              ) : (
                <Dashboard dates={date} setDates={setDate} />
              )}
            </div>
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
