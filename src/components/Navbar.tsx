import { Dispatch, SetStateAction, useState } from "react";
import dayjs from "dayjs";
import Card from "./Card";
import InputDate from "./InputDate";

type Props = {
  activeView: "DASHBOARD" | "DATA_TABLE";
  setDate: Dispatch<SetStateAction<string[]>>;
};

export default function Navbar({ activeView, setDate }: Props) {
  const [date, setCurrentDate] = useState<string[]>([]);
  const onChangeDate = ([start, end]: Date[]) => {
    setCurrentDate([
      dayjs(start).format("YYYY-MM-DD"),
      dayjs(end || start).format("YYYY-MM-DD"),
    ]);
  };

  const onClick = () => {
    setDate(date);
  };

  return (
    <Card className="col-span-7 flex items-center justify-between">
      <h1 className="font-bold text-lg">
        {activeView === "DASHBOARD" ? "Dashboard" : "Data Table"}
      </h1>
      {activeView === "DASHBOARD" && (
        <div className="flex items-center gap-1">
          <InputDate onChange={onChangeDate} />
          <button
            onClick={onClick}
            className="bg-blue-400 text-white px-2 !h-[40px] rounded text-sm fc"
          >
            <i className="ri-equalizer-line mr-2"></i>
            <span>Apply</span>
          </button>
        </div>
      )}
    </Card>
  );
}
