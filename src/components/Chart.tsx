import { Fragment } from "react";
import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

type ChartType =
  | "line"
  | "area"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap";

type Props = {
  type: ChartType;
  data: Pick<ApexOptions, "series">;
  options: ApexOptions;
};

export default function Chart({ type, data, options }: Props) {
  return (
    <Fragment>
      <ReactApexChart
        options={options as ApexOptions}
        series={data.series}
        height={350}
        type={type}
      />
    </Fragment>
  );
}
