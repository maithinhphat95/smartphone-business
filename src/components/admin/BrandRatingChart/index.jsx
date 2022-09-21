import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";
BrandRatingChart.propTypes = {};

function BrandRatingChart(props) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Apple", "Samsung", "Oppo", "Xiaomi", "Vivo", "Nokia"],
    datasets: [
      {
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
    <Box sx={{ maxWidth: "350px" }}>
      <Pie data={data} />;
    </Box>
  );
}

export default BrandRatingChart;
