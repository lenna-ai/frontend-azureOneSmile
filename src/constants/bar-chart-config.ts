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
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

export default barChartConfig;
