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
import { faker } from "@faker-js/faker";
import { monthAxis, yearAxis } from "../../../common/charts";
import { Box, Typography, Link } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import CharHeader from "../../ChartHeader";
import ChartContainer from "../ChartContainer/index.jsx";
import ChartCover from "../ChartCover";
import { adminColorDark, adminColorLight } from "../../../../constant/admin";
import RevenueReportCard from "../../RevenueReportCard";
MonthlyRevenueChart.propTypes = {};

function MonthlyRevenueChart(props) {
  const { isViewDetail } = props;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const targetData = [200, 200, 200, 200, 200];
  const actualData = [150, 180, 210, 220, 260];
  const fakeData = {
    target: monthAxis.map(() => faker.datatype.number({ min: 200, max: 220 })),
    actual: monthAxis.map(() => faker.datatype.number({ min: 150, max: 260 })),
  };
  const goalData = "64.5";
  // Config option
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 300,
        stepSize: 50,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "",
      },
      datalabels: {
        display: true,
        color: "white",
        anchor: "start",
        align: "end",
        clamp: true,
      },
    },
  };
  // Get the data of chart: include 2 column target and actual
  const data = {
    labels: monthAxis,
    datasets: [
      {
        label: "Target",
        data: fakeData.target,
        backgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Actual",
        data: fakeData.actual,
        backgroundColor: "rgba(53, 162, 235)",
      },
    ],
  };

  return (
    <ChartContainer maxWidth="800px">
      {/* Header of chart */}
      <CharHeader chartName="Revenue Report 2022" />
      {/* Body of chart */}
      <ChartCover>
        {/* Sale result */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "column" },
            justifyContent: "space-evenly",
            gap: 1,
          }}
        >
          {/* Gross revenue */}
          <RevenueReportCard
            reportObj={{
              name: "Gross Revenue",
              value: 2400323,
              type: "year",
              previous: 2600323,
            }}
          />

          {/* Quater Revenue */}
          <RevenueReportCard
            reportObj={{
              name: "4th Quarter Revenue",
              value: 2400323,
              type: "quater",
              previous: 2600323,
            }}
          />

          {/* Month Revenue */}
          <RevenueReportCard
            reportObj={{
              name: "October Revenue",
              value: 2400323,
              type: "quater",
              previous: 2600323,
            }}
          />
        </Box>
        {/* Chart of revenue summary */}
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <Bar options={options} plugins={[ChartDataLabels]} data={data} />
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

export default MonthlyRevenueChart;
