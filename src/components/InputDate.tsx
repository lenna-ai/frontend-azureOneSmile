import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export default function InputDate({
  onChange,
}: {
  onChange: (dates: Date[]) => void;
}) {
  return (
    <div>
      <div className="relative w-full border rounded t min-w-[250px]">
        <Flatpickr
          data-enable-time={false}
          className="block w-full px-3 py-2 rounded bg-gray-100"
          placeholder="Filter Date"
          options={{
            mode: "range",
            dateFormat: "d M Y",
            maxDate: "today",
          }}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
