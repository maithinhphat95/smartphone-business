import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartHeader from "../../ChartHeader";
import ChartContainer from "../ChartContainer/index.jsx";
import ChartCover from "../ChartCover";
import ChartBox from "../ChartBox";
import {
  yearAxis,
  adminColorLight,
  adminColorDark,
} from "../../../../constant/admin";

RevenueSummaryChart.propTypes = {};

function RevenueSummaryChart(props) {
  const { isViewDetail } = props;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
    target: yearAxis.map(() => faker.datatype.number({ min: 200, max: 220 })),
    actual: yearAxis.map(() => faker.datatype.number({ min: 150, max: 260 })),
  };
  const goalData = "64.5";
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
        anchor: "start",
        align: "end",
        clamp: true,
      },
      legend: {
        position: "top",
        labels: { color: theme.primary },
      },
    },
  };
  // Get the data of chart: include 2 column target and actual
  const data = {
    labels: yearAxis,
    datasets: [
      {
        label: "Target (USD)",
        data: fakeData.target,
        backgroundColor: theme.chartColor1,
        borderColor: theme.chartColor1,
      },
      {
        label: "Actual (USD)",
        data: fakeData.actual,
        backgroundColor: theme.chartColor2,
        borderColor: theme.chartColor2,
      },
    ],
  };

  return (
    <ChartContainer maxWidth="800px">
      {/* Header of chart */}
      <ChartHeader chartName="Revenue Summary" goalData={goalData} />
      {/* Body of chart */}
      <ChartCover>
        {/* Sale result */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "column" },
            justifyContent: "space-evenly",
            gap: { xs: 2, sm: "50px", lg: 2 },
          }}
        >
          {/* Annual Revenue Target */}
          <Box>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontStyle: "italic",
                borderBottom: "1px solid black",
                display: "flex",
                width: "max-content",
                margin: "0 auto",
              }}
            >
              Annual Target
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 2, md: 0 },
                flexDirection: { xs: "row", md: "column" },
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ color: theme.highlight1 }}>
                {Number(2400).toLocaleString()} pcs
              </Typography>
              <Typography variant="h6" sx={{ color: theme.highlight2 }}>
                $ {Number(2500000).toLocaleString()}
              </Typography>
            </Box>
          </Box>
          {/* Actual This Year Revenue */}
          <Box>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontStyle: "italic",
                borderBottom: "1px solid black",
                display: "flex",
                width: "max-content",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Actual 2022
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 2, md: 0 },
                flexDirection: { xs: "row", md: "column" },
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ color: theme.highlight1 }}>
                {Number(1300).toLocaleString()} pcs
              </Typography>
              <Typography variant="h6" sx={{ color: theme.highlight2 }}>
                $ {Number(1500000).toLocaleString()}
              </Typography>
            </Box>
          </Box>
          {goalData && (
            <Typography
              variant="p"
              component="p"
              sx={{
                textAlign: "center",
                fontStyle: "italic",
                display: { sm: "none" },
              }}
            >
              Goal this year:{" "}
              <Typography
                component="span"
                sx={{ color: "red", fontWeight: "bold", fontStyle: "normal" }}
              >
                {goalData}%
              </Typography>
            </Typography>
          )}
        </Box>
        {/* Chart of revenue summary */}
        <ChartBox>
          <Bar options={options} plugins={[ChartDataLabels]} data={data} />
        </ChartBox>
      </ChartCover>
      {isViewDetail && (
        <Link to="/admin/revenue">
          <Typography
            variant={"h6"}
            sx={{
              p: 1,
              textAlign: "center",
              textDecoration: "underline",
              color: "black",
            }}
          >
            View Details
          </Typography>
        </Link>
      )}
    </ChartContainer>
  );
}

export default RevenueSummaryChart;
