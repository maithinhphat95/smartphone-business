import React, { useEffect, useState } from "react";
import {
  adminColorLight,
  couponList,
  productList,
} from "../../../../constant/admin";
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
  TableSortLabel,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Search,
} from "@mui/icons-material";

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
                  let currentProduct = productList.find(
                    (product) => product.id === purchasedItem.productId
                  );
                  let currentCoupon = couponList.find(
                    (coupon) => coupon.name === purchasedItem.coupon
                  );
                  const bonus =
                    currentCoupon.type === "direct"
                      ? currentCoupon.value
                      : currentCoupon.type === "percent"
                      ? (currentProduct.price *
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
                          image={currentProduct.picture}
                          alt={currentProduct.name}
                          sx={{ width: "40px", marginRight: "10px" }}
                        />
                        <Typography variant="p">
                          {currentProduct.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        {purchasedItem.quantity.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {`$${currentProduct.price.toLocaleString()}`}
                      </TableCell>
                      <TableCell align="right">
                        {`$${(
                          currentProduct.price * purchasedItem.quantity
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
                          currentProduct.price * purchasedItem.quantity -
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
  const { row, extraData, index, length, sortDesc } = props;
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
        <TableCell align="center">
          {sortDesc ? length - index : index + 1}
        </TableCell>
        {Object.keys(row).map((item, index) => {
          if (item !== "purchasedList" && item !== "no") {
            return (
              <TableCell key={index} align="center">
                {`${
                  item === "subtotal" || item === "bonus" || item === "total"
                    ? "$"
                    : ""
                } ${row[item].toLocaleString()}`}
              </TableCell>
            );
          }
          return "";
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dec, setDec] = useState(true);
  // Init sort by DATE
  // const [sortDesc, setSortDesc] = useState(true);
  // const [sortBy, setSortBy] = useState("DATE");
  // const [dataSorted, setDataSorted] = useState([
  //   ...data.body.sort((a, b) => {
  //     let aDate = new Date(a.date);
  //     let bDate = new Date(b.date);
  //     if (aDate < bDate) {
  //       return sortDesc ? 1 : -1;
  //     } else if (aDate > bDate) {
  //       return sortDesc ? -1 : 1;
  //     }
  //   }),
  // ]);
  // Init no sort
  const [sortDesc, setSortDesc] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [dataSorted, setDataSorted] = useState([...data.body]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    let currentData = [];
    if (sortBy === "DATE") {
      currentData = [
        ...data.body.sort((a, b) => {
          let aDate = new Date(a.date);
          let bDate = new Date(b.date);
          if (aDate < bDate) {
            return sortDesc ? 1 : -1;
          } else if (aDate > bDate) {
            return sortDesc ? -1 : 1;
          }
        }),
      ];
    } else {
      if (data.body[0].hasOwnProperty(sortBy.toLocaleLowerCase())) {
        currentData = [
          ...data.body.sort((a, b) => {
            if (a[sortBy.toLowerCase()] < b[sortBy.toLowerCase()]) {
              return sortDesc ? 1 : -1;
            } else if (a[sortBy.toLowerCase()] > b[sortBy.toLowerCase()]) {
              return sortDesc ? -1 : 1;
            }
          }),
        ];
      } else currentData = [...data.body];
    }
    setDataSorted(currentData);
  }, [dec]);

  const requestSort = (category) => {
    if (sortBy === category) {
      setSortDesc(!sortDesc);
    } else {
      setSortDesc(true);
      setSortBy(category);
    }
    setDec(!dec);
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
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <TableSortLabel
                    active={sortBy == item.toLocaleString()}
                    direction={
                      sortBy == item.toLocaleString()
                        ? sortDesc
                          ? "desc"
                          : "asc"
                        : "none"
                    }
                  >
                    {item}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {dataSorted.map((row, index) => (
              <Row
                key={row.id}
                row={row}
                extraData={data.extra}
                index={index}
                sortDesc={sortDesc}
                length={dataSorted.length}
              />
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
