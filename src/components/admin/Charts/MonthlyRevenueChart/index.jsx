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
        text: "Annual Revenue Summary",
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
          }}
        >
          {/* Gross revenue */}
          <Box sx={{ backgroundColor: "" }}>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontStyle: "italic",
                // borderBottom: "1px solid black",
                display: "flex",
                width: "max-content",
                margin: "0 auto",
              }}
            >
              Gross Revenue
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 4, md: 0 },
                flexDirection: { xs: "row", md: "column" },
                mb: 2,
                mt: 1,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ color: "#0842A0" }}>
                2400 pcs
              </Typography>
              <Typography variant="h6" sx={{ color: "#32810D" }}>
                $ 2500000
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
              Actual This Year Revenue
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 4, md: 0 },
                flexDirection: { xs: "row", md: "column" },
                mb: 2,
                mt: 1,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ color: "#0842A0" }}>
                1300 pcs
              </Typography>
              <Typography variant="h6" sx={{ color: "#32810D" }}>
                $ 1500000
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
