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
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { faker } from "@faker-js/faker";
import { adminColorLight } from "../../../../constant/admin";

function createData(no, id, user, date, amount, status) {
  return {
    no,
    id,
    user,
    date,
    amount,
    status,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
        price: 200,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
        price: 222,
      },
    ],
  };
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rows = [
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.delivery
  ),
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.prepare
  ),
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.delivery
  ),
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.received
  ),
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.received
  ),
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.received
  ),
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.received
  ),
  createData(
    1,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    24,
    orderStatus.received
  ),
];
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
        <TableCell component="th" scope="row">
          {row.no}
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.user}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{historyRow.price}</TableCell>
                    </TableRow>
                  ))}
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
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
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
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
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
              <TableCell align="center">DATE</TableCell>
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
