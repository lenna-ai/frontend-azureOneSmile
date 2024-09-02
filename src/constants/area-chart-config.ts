import { ApexOptions } from "apexcharts";

const areaChartConfig = (yAxis: string[]): ApexOptions => ({
  chart: {
    height: "100%",
    background: "transparent",
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  theme: {
    mode: "light",
  },
  xaxis: {
    type: "datetime",
    categories: yAxis,
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
});

export default areaChartConfig;
