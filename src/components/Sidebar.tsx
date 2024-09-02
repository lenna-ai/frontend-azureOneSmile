import Card from "./Card";
import clsx from "clsx";

type Props = {
  activeView: "DASHBOARD" | "DATA_TABLE";
  onChangeView: (view: "DASHBOARD" | "DATA_TABLE") => void;
};

export default function Sidebar({ activeView, onChangeView }: Props) {
  return (
    <Card className="min-h-full">
      <img src="/logo.png" alt="logo" className="w-full" />
      <ul className="w-full mt-4 border-t border-gray-200">
        <li
          onClick={() => onChangeView("DASHBOARD")}
          className={clsx(
            "p-4 mt-4 flex items-center gap-2 cursor-pointer",
            activeView === "DASHBOARD" && "shadow-md rounded-lg"
          )}
        >
          <div
            className={clsx(
              "size-[40px] fc rounded-lg mr-4",
              activeView === "DASHBOARD" && "bg-[#E16C61]"
            )}
          >
            <i
              className={clsx(
                "ri-home-7-fill",
                activeView === "DASHBOARD" ? "text-white" : "text-[#E16C61]"
              )}
            ></i>
          </div>
          <b>Dashboard</b>
        </li>
        <li
          onClick={() => onChangeView("DATA_TABLE")}
          className={clsx(
            "p-4 mt-4 flex items-center gap-2 cursor-pointer",
            activeView === "DATA_TABLE" && "shadow-md rounded-lg"
          )}
        >
          <div
            className={clsx(
              "size-[40px] fc rounded-lg mr-4",
              activeView === "DATA_TABLE" && "bg-[#E16C61]"
            )}
          >
            <i
              className={clsx(
                "ri-bar-chart-fill",
                activeView === "DATA_TABLE" ? "text-white" : "text-[#E16C61]"
              )}
            ></i>
          </div>
          <b>Data</b>
        </li>
      </ul>
    </Card>
  );
}
