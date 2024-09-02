import { ApexOptions } from "apexcharts";

const barChartConfig: ApexOptions = {
  chart: {
    height: "100%",
    background: "transparent",
  },
  grid: {
    show: true,
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
    type: "category",
    categories: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

export default barChartConfig;
