import React from "react";

type Props = {
  columns: string[];
  children: React.ReactNode;
};

export default function Table({ columns, children }: Props) {
  return (
    <table className="w-full text-xs 2xl:text-base">
      <thead>
        <tr className="bg-gray-100 [&>th]:p-3 [&>th]:text-start [&>th]:capitalize">
          {columns.map((column, i) => (
            <th key={i} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
