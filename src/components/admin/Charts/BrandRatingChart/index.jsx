import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartHeader from "../../ChartHeader";
import ChartContainer from "../ChartContainer/index.jsx";
import ChartCover from "../ChartCover";
import { adminColorDark, adminColorLight } from "../../../../constant/admin";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
BrandRatingChart.propTypes = {};

function BrandRatingChart(props) {
  const { isViewDetail } = props;
  ChartJS.register(ArcElement, Tooltip, Legend);
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
  // Chart Data
  const data = {
    labels: ["Apple", "Samsung", "Oppo", "Xiaomi", "Vivo", "Nokia"],
    datasets: [
      {
        type: "pie",
        label: "",
        data: [40, 30, 15, 8, 5, 2],
        backgroundColor: [
          theme.chartColor1,
          theme.chartColor2,
          theme.chartColor3,
          theme.chartColor4,
          theme.chartColor5,
          theme.chartColor6,
        ],

        borderWidth: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        anchor: "end",
        align: "start",
        clamp: true,
      },
      legend: {
        position: "top",
        labels: { color: theme.primary },
      },
    },
  };

  return (
    <ChartContainer maxWidth="350px">
      <ChartHeader chartName="Brands Sold Percentage 2022 (%)" />
      <ChartCover>
        <Box
          sx={{
            overflow: "auto",
          }}
        >
          <Pie data={data} plugins={[ChartDataLabels]} options={options} />
        </Box>
      </ChartCover>

      {isViewDetail && (
        <Link to="/admin/sale">
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

export default BrandRatingChart;
