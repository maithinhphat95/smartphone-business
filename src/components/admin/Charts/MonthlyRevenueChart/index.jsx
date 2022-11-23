import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartContainer from "../ChartContainer/index.jsx";
import ChartCover from "../ChartCover";
import {
  monthAxis,
  adminColorLight,
  adminColorDark,
} from "../../../../constant/admin";
import RevenueReportCard from "../../RevenueReportCard";
import ChartBox from "../ChartBox";
import ChartHeader from "../../ChartHeader";
import { useSelector } from "react-redux";
MonthlyRevenueChart.propTypes = {};

function MonthlyRevenueChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  // Update themse color
  useEffect(() => {
    switch (themeSeleted) {
      case "light":
        setTheme(adminColorLight);
        break;
      case "dark":
        setTheme(adminColorDark);
        break;
      default:
        setTheme(theme);
        break;
    }
  }, [themeSeleted]);

  // Fake Data
  const fakeData = {
    target: monthAxis.map(() => faker.datatype.number({ min: 100, max: 220 })),
    actual: monthAxis.map(() => faker.datatype.number({ min: 50, max: 260 })),
  };

  // Config option
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: { color: theme.primary },
        ticks: { color: theme.primary },
      },
      y: {
        min: 0,
        max: 300,
        stepSize: 100,
        grid: { color: theme.primary },
        ticks: { color: theme.primary },
      },
    },
    plugins: {
      datalabels: {
        display: true,
        color: themeSeleted == "dark" ? "white" : "black",
      },
      legend: {
        position: "top",
        labels: { color: theme.primary },
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
        backgroundColor: theme.chartColor1,
        borderColor: theme.chartColor1,
      },
      {
        label: "Actual",
        data: fakeData.actual,
        backgroundColor: theme.chartColor2,
        borderColor: theme.chartColor2,
      },
    ],
  };

  return (
    <ChartContainer maxWidth="800px">
      {/* Header of chart */}
      <ChartHeader chartName="Revenue Report 2022" />
      {/* Body of chart */}
      <ChartCover>
        {/* Sale result */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "column" },
            justifyContent: "space-evenly",
            gap: 0.5,
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
        <ChartBox>
          <Line options={options} plugins={[ChartDataLabels]} data={data} />
        </ChartBox>
      </ChartCover>
    </ChartContainer>
  );
}

export default MonthlyRevenueChart;
