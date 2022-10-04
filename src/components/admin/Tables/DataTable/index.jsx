import React, { useState } from "react";
import { adminColorLight, couponList } from "../../../../constant/admin";
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Typography,
  Paper,
  TablePagination,
  CardMedia,
  TextField,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Search,
} from "@mui/icons-material";

import { useSelector } from "react-redux";

import CharHeader from "../../ComponentHeader";

const ExtraTable = (props) => {
  const { row, extraData, isOpen } = props;
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{
              margin: 1,
              padding: 1,
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              Purchased list
            </Typography>
            <Table
              size="small"
              sx={{
                backgroundColor: adminColorLight.primary,
                borderRadius: 2,
                "& td, th": { padding: "8px 16px" },
                margin: "8px",
              }}
            >
              <TableHead
                sx={{
                  borderBottom: "1px solid black",
                  "& th": { borderBottom: "none", fontWeight: "bold" },
                }}
              >
                <TableRow>
                  {extraData.extraHead.map((item, index) => (
                    <TableCell key={index} align="center">
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  "& tr": { borderBottom: "1px solid white" },
                  "& td": { border: "none" },
                }}
              >
                {row.purchasedList.map((purchasedItem, index) => {
                  let product = {
                    id: "23231123",
                    name: "Iphone 13 Pro Max",
                    color: "green",
                    picture:
                      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1051159192.jpeg",
                    price: 1000,
                  };
                  let currentCoupon = couponList.find(
                    (coupon) => coupon.name === purchasedItem.coupon
                  );
                  const bonus =
                    currentCoupon.type === "direct"
                      ? currentCoupon.value
                      : currentCoupon.type === "percent"
                      ? (product.price *
                          purchasedItem.quantity *
                          currentCoupon.value) /
                        100
                      : 0;
                  return (
                    <TableRow key={purchasedItem.productId}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell
                        align="left"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <CardMedia
                          component="img"
                          // height="100px"
                          image={product.picture}
                          alt={product.name}
                          sx={{ width: "40px", marginRight: "10px" }}
                        />
                        <Typography variant="p">{product.name}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        {purchasedItem.quantity.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {`$${product.price.toLocaleString()}`}
                      </TableCell>
                      <TableCell align="right">
                        {`$${(
                          product.price * purchasedItem.quantity
                        ).toLocaleString()}`}
                      </TableCell>
                      <TableCell align="center">
                        {purchasedItem.coupon}{" "}
                        {currentCoupon.type === "direct"
                          ? `($${currentCoupon.value.toLocaleString()})`
                          : currentCoupon.type === "percent"
                          ? `(${currentCoupon.value.toLocaleString()}%)`
                          : ""}
                      </TableCell>
                      <TableCell align="right">{`- $${bonus}`}</TableCell>
                      <TableCell align="right">
                        {`$${(
                          product.price * purchasedItem.quantity -
                          bonus
                        ).toLocaleString()}`}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

// Function show each row of tablebody (order item)
function Row(props) {
  const { row, extraData } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {extraData.isExtra && (
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
        )}
        {Object.keys(row).map((item, index) => {
          if (item !== "purchasedList") {
            return (
              <TableCell key={index} align="center">
                {row[item].toLocaleString()}
              </TableCell>
            );
          }
        })}
      </TableRow>
      {/* The table of purchasing list of order item */}
      {extraData.isExtra && (
        <ExtraTable row={row} extraData={extraData} isOpen={isOpen} />
      )}
    </>
  );
}

export default function DataTable(props) {
  const { data } = props;
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");

  const [dataSorted, setDataSorted] = useState(data.body);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const state1 = useSelector((state) => state.admin);
  // console.log(state1);

  const handleSortTable = (category) => {
    let newData = [];
    if (category === "DATE") {
      newData = [
        ...data.body.sort((a, b) => {
          let aDate = new Date(a.date);
          let bDate = new Date(b.date);
          if (aDate < bDate) {
            return sortOrder === "desc" ? 1 : -1;
          } else return sortOrder === "desc" ? -1 : 1;
        }),
      ];
    } else {
      newData = [
        ...data.body.sort((a, b) => {
          if (a[category.toLowerCase()] < b[category.toLowerCase()]) {
            return 1;
          } else return -1;
        }),
      ];
    }
    setDataSorted(newData);
  };
  const requestSort = (category) => {
    if (sortBy !== category || sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    setSortBy(category);
    handleSortTable(category);
  };

  return (
    <Paper sx={{ borderRadius: 2, boxShadow: "4px 4px 4px #ccc" }}>
      <Box sx={{ display: "flex" }}>
        <CharHeader chartName="Order List" />
        {/* Serach Box */}
        <Box sx={{ m: 2 }}>
          <TextField id="outlined-search" label="Search field" type="search" />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Search />
          </IconButton>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead
            sx={{
              borderBottom: "1px solid black",
              "& th": { borderBottom: "none", fontWeight: "bold" },
            }}
          >
            <TableRow>
              {data.extra.isExtra && <TableCell align="center" width="10px" />}
              {data.head.map((item, index) => (
                <TableCell
                  key={index}
                  align="center"
                  onClick={() => {
                    requestSort(item);
                    // handleSortTable(item);
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {dataSorted.map((row) => (
              <Row key={row.id} row={row} extraData={data.extra} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.body.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
