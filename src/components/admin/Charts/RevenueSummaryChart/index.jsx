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
import { Box, Typography } from "@mui/material";
import CharHeader from "../../ChartHeader";
import ChartContainer from "../ChartContainer.js";

RevenueSummary.propTypes = {};

function RevenueSummary(props) {
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
    target: yearAxis.map(() => faker.datatype.number({ min: 200, max: 220 })),
    actual: yearAxis.map(() => faker.datatype.number({ min: 150, max: 260 })),
  };
  const goalData = "64.5";
  // Config option
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Annual Revenue Summary",
      },
    },
  };
  // Get the data of chart: include 2 column target and actual
  const data = {
    labels: yearAxis,
    datasets: [
      {
        label: "Target",
        data: targetData,
        backgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Actual",
        data: actualData,
        backgroundColor: "rgba(53, 162, 235)",
      },
    ],
  };

  return (
    <ChartContainer maxWidth="800px">
      {/* Header of chart */}
      <CharHeader chartName="Revenue Summary" goalData={goalData} />
      {/* Body of chart */}
      <Box
        sx={{
          padding: "8px 10px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 0, md: 2 },
        }}
      >
        {/* Sale result */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
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
              Annual Revenue Target
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
          <Bar options={options} data={data} />
        </Box>
      </Box>
      {/* <Typography>View detail</Typography> */}
    </ChartContainer>
  );
}

export default RevenueSummary;
