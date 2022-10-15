import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
SummaryCard.propTypes = {};

function SummaryCard(props) {
  const { icon, color, item } = props;
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card
        sx={{
          borderLeft: 4,
          borderRadius: 1,
          borderColor: color,
          p: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: color,
            float: "right",
            height: 40,
            width: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
          }}
        >
          {icon}
        </Box>

        <Typography variant="p" component="h3" color={"inherit"}>
          {item.value}
        </Typography>
        <Typography variant="p" component="p" color={"inherit"}>
          {item.name}
        </Typography>
        <Typography
          variant="p"
          component="p"
          color={"inherit"}
          sx={{ textAlign: "start" }}
        >
          <ArrowUpward sx={{ color: "green", transform: "translateY(25%)" }} />{" "}
          12% from last month
        </Typography>
      </Card>
    </Grid>
  );
}

export default SummaryCard;
