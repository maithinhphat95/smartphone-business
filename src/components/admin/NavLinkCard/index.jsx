import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Card, Grid } from "@mui/material";
import { ArrowUpward, ArrowDownward, ShoppingBag } from "@mui/icons-material";
NavLinkCard.propTypes = {};

function NavLinkCard(props) {
  const { icon, color, item } = props;
  const handleClickNavLinkCard = () => {
    console.log("click");
  };
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card
        sx={{
          width: "250px",
          borderLeft: 4,
          borderRadius: 1,
          borderColor: color,
          p: 2,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={handleClickNavLinkCard}
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

        <Typography variant="p" component="h3">
          {item.value}
        </Typography>
        <Typography variant="p" component="p">
          {item.name}
        </Typography>
        <Typography variant="p" component="p" sx={{ textAlign: "start" }}>
          <ArrowUpward sx={{ color: "green", transform: "translateY(25%)" }} />{" "}
          12% from last month
        </Typography>
      </Card>
    </Grid>
  );
}

export default NavLinkCard;
