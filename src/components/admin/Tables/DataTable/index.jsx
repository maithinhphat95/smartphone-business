import React, { useState } from "react";
import PropTypes from "prop-types";
import { orderStatus } from "../../../../constant/admin";
// import { DataGrid } from "@mui/x-data-grid";
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
  Menu,
  Search,
} from "@mui/icons-material";

import { faker } from "@faker-js/faker";
import { adminColorLight } from "../../../../constant/admin";
import CharHeader from "../../ComponentHeader";

// Create fake order item function
function fakeOrderItem(no, id, user, date, amount, status) {
  return {
    no,
    id,
    user,
    date,
    amount,
    status,
    purchasedList: [
      { id: 1, productId: "uysdiu223d", quantity: 2 },
      { id: 2, productId: "uysdiu2223", quantity: 1 },
      { id: 3, productId: "uysdiu2223", quantity: 3 },
      { id: 4, productId: "uysdiu2223", quantity: 1 },
    ],
  };
}

// Init the rows by order list formular, fixed to other table in the future
const rows = [
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.delivery
  ),
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.prepare
  ),
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.delivery
  ),
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.received
  ),
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.received
  ),
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.received
  ),
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.received
  ),
  fakeOrderItem(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    orderStatus.received
  ),
];

// Functrion sort array
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
// Function show each row of tablebody (order item)
function Row(props) {
  const { row } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.no}</TableCell>
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.user}</TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">{row.amount.toLocaleString()}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
      </TableRow>
      {/* The table of purchasing list of order item */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 1,
                padding: 1,
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                Purchasing list
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
                    <TableCell align="center">#</TableCell>
                    <TableCell align="center">Product</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Amount</TableCell>
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
                          {product.price.toLocaleString()}
                        </TableCell>
                        <TableCell align="right">
                          {(
                            product.price * purchasedItem.quantity
                          ).toLocaleString()}
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
    </>
  );
}

export default function DataTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(column);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <Paper sx={{ borderRadius: 2, boxShadow: "4px 4px 4px #ccc" }}>
      <Box sx={{ display: "flex" }}>
        <CharHeader chartName="Order List" />
        {/* Serach Box */}
        <Box>
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
              <TableCell align="center" width="10px" />
              <TableCell align="center" width="10px">
                #
              </TableCell>
              <TableCell align="center" width="200px">
                ID
              </TableCell>
              <TableCell align="center" width="200px">
                USER
              </TableCell>
              <TableCell align="center" width="200px">
                DATE
              </TableCell>
              <TableCell align="center" width="200px">
                AMOUNT
              </TableCell>
              <TableCell align="center" width="200px">
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
