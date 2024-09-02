import Card from "./Card";
import InputDate from "./InputDate";

type Props = {
  activeView: "DASHBOARD" | "DATA_TABLE";
};

export default function Navbar({ activeView }: Props) {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <Card className="col-span-7 flex items-center justify-between">
      <h1 className="font-bold text-lg">
        {activeView === "DASHBOARD" ? "Dashboard" : "Data Table"}
      </h1>
      <div className="flex items-center gap-1">
        <InputDate onChange={onChangeDate} />
        <button className="bg-blue-400 text-white px-2 !h-[40px] rounded text-sm fc">
          <i className="ri-equalizer-line mr-2"></i>
          <span>Apply</span>
        </button>
      </div>
    </Card>
  );
}
