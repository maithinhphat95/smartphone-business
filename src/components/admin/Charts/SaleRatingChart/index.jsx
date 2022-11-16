import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartContainer from "../ChartContainer/index.jsx";
import ChartCover from "../ChartCover";
import { monthAxis, adminColorLight } from "../../../../constant/admin";
import ChartBox from "../ChartBox";
import ChartHeader from "../../ChartHeader";
SaleRatingChart.propTypes = {};

function SaleRatingChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const fakeData = {
    apple: [20, 25, 25, 32, 33, 30, 20, 25, 25, 32, 33, 30],
    samsung: [20, 25, 25, 32, 33, 30, 20, 25, 25, 32, 33, 30],
    oppo: [15, 25, 25, 32, 33, 30, 20, 25, 25, 32, 33, 30],
    xiaomi: [20, 25, 25, 32, 33, 30, 20, 25, 25, 32, 33, 30],
    vivo: [20, 25, 25, 32, 33, 30, 20, 25, 25, 32, 33, 30],
    nokia: [5, 25, 25, 32, 33, 30, 20, 25, 25, 32, 33, 30],
  };
  // Config option
  const options = {
    plugins: {
      title: {
        display: false,
      },
      datalabels: {
        color: "white",
        anchor: "center",
        align: "center",
        clamp: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  // Get the data of chart: include 2 column target and actual
  const data = {
    labels: monthAxis,
    datasets: [
      {
        label: "Apple",
        data: fakeData.apple,
        backgroundColor: adminColorLight.chartColor1,
      },
      {
        label: "Samsung",
        data: fakeData.samsung,
        backgroundColor: adminColorLight.chartColor2,
      },
      {
        label: "Oppo",
        data: fakeData.oppo,
        backgroundColor: adminColorLight.chartColor3,
      },
      {
        label: "Xiaomi",
        data: fakeData.vivo,
        backgroundColor: adminColorLight.chartColor4,
      },
      {
        label: "Vivo",
        data: fakeData.vivo,
        backgroundColor: adminColorLight.chartColor5,
      },
      {
        label: "Nokia",
        data: fakeData.vivo,
        backgroundColor: adminColorLight.chartColor6,
      },
    ],
  };

  return (
    <ChartContainer maxWidth="800px">
      {/* Header of chart */}
      <ChartHeader chartName="Sale Rating 2022" />
      {/* Body of chart */}
      <ChartCover>
        {/* Chart of revenue summary */}
        <ChartBox>
          <Bar options={options} plugins={[ChartDataLabels]} data={data} />
        </ChartBox>
      </ChartCover>
    </ChartContainer>
  );
}

export default SaleRatingChart;
