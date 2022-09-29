import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box, Link } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ComponentHeader from "../../ComponentHeader";
import ChartContainer from "../ChartContainer/index.jsx";
import ChartCover from "../ChartCover";
import { adminColorLight } from "../../../../constant/admin";

BrandRatingChart.propTypes = {};

function BrandRatingChart(props) {
  const { isViewDetail } = props;
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Apple", "Samsung", "Oppo", "Xiaomi", "Vivo", "Nokia"],
    datasets: [
      {
        type: "pie",
        label: "# of Votes",
        data: [40, 30, 15, 8, 5, 2],
        backgroundColor: [
          adminColorLight.chartColor1,
          adminColorLight.chartColor2,
          adminColorLight.chartColor3,
          adminColorLight.chartColor4,
          adminColorLight.chartColor5,
          adminColorLight.chartColor6,
        ],

        borderWidth: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: true,
        color: "white",
        anchor: "end",
        align: "start",
        clamp: true,
      },
    },
  };
  const config = {
    type: "pie",
    data: data,
    options: options,
  };

  return (
    <ChartContainer maxWidth="350px">
      <ComponentHeader chartName="Phone Brand Rating" />
      <ChartCover>
        <Box
          sx={{
            overflow: "auto",
            // justifySelf: "center",
          }}
        >
          <Pie data={data} plugins={[ChartDataLabels]} options={options} />
        </Box>
      </ChartCover>

      {isViewDetail && (
        <Link
          href="#"
          variant={"h6"}
          sx={{
            p: 1,
            textAlign: "center",
            textDecoration: "underline",
            color: "inherit",
          }}
        >
          View Details
        </Link>
      )}
    </ChartContainer>
  );
}

export default BrandRatingChart;
