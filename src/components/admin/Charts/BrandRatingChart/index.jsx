import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";
import ChartHeader from "../../ChartHeader";
import ChartContainer from "../ChartContainer.js";
BrandRatingChart.propTypes = {};

function BrandRatingChart(props) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Apple", "Samsung", "Oppo", "Xiaomi", "Vivo", "Nokia"],
    datasets: [
      {
        type: "pie",
        label: "# of Votes",
        data: [40, 30, 15, 8, 5, 2],
        backgroundColor: [
          "#52514f",
          "#034c9d",
          "#1d9e63",
          "#ff6700",
          "#cd3c99",
          "#f3d522",
        ],

        borderWidth: 0.5,
      },
    ],
  };
  return (
    <ChartContainer maxWidth="350px">
      <ChartHeader chartName="Phone Brand Rating" />
      <Pie data={data} />
    </ChartContainer>
  );
}

export default BrandRatingChart;
