import React, { useEffect, useState } from "react";
import {
  adminColorDark,
  adminColorLight,
  productList,
  tableHead,
  tableRows,
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
  CardMedia,
  TextField,
  Pagination,
  Stack,
  Select,
  FormControl,
  MenuItem,
  Button,
} from "@mui/material";
import {
  Delete,
  Edit,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Search,
} from "@mui/icons-material";
import "./style.scss";
import { useSelector } from "react-redux";
import SortIcon from "../../SortIcon";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "../DeleteDialog";

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
                backgroundColor: adminColorLight.background,
                border: "1px solid black",
                borderRadius: 2,
                "& td, th": { padding: "8px 16px" },
                margin: "8px",
              }}
            >
              {/* Head */}
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
              {/* Body */}
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

                  return (
                    <TableRow key={purchasedItem.productId}>
                      {/* No */}
                      <TableCell align="center">{index + 1}</TableCell>
                      {/* Name */}
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

                      {/* Quantity */}
                      <TableCell align="center">
                        {purchasedItem.quantity.toLocaleString()}
                      </TableCell>

                      {/* Price */}
                      <TableCell align="right">
                        {`$${currentProduct.price.toLocaleString()}`}
                      </TableCell>

                      {/* Total */}
                      <TableCell align="right">
                        {`$${(
                          currentProduct.price * purchasedItem.quantity
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
  const { row, extraData, isControl, category } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  // Request open Delete Dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Request Close Delete Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate("/admin/revenue");
  };
  return (
    <>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset", "& td": { borderBottom: "none" } },
        }}
      >
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
        {category === "order" &&
          Object.keys(row).map((item, index) => {
            if (item !== "purchasedList") {
              return (
                <TableCell key={index} align="center">
                  {`${item === "total" ? "$" : ""} ${row[item]}`}
                </TableCell>
              );
            }
            return "";
          })}

        <TableCell>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Button
              title="Done"
              className="action-button"
              variant="contained"
              color="info"
              sx={{ padding: 0.5, minWidth: 0 }}
            >
              <Edit />
            </Button>
            <Button
              title="Delete Order"
              className="action-button"
              variant="outlined"
              color="error"
              sx={{ padding: 0.5, minWidth: 0, width: "50%" }}
              onClick={() => {
                // handleOpenDialog();
              }}
            >
              <Delete />
            </Button>
            <DeleteDialog
              open={openDialog}
              onClose={handleCloseDialog}
              id={row.id}
            />
          </Stack>
          {/* <ToastContainer /> */}
        </TableCell>
      </TableRow>
      {/* The table of purchasing list of order item */}
      {extraData.isExtra && (
        <ExtraTable row={row} extraData={extraData} isOpen={isOpen} />
      )}
    </>
  );
}

export default function OrderTable(props) {
  // // Fake Data
  const data = {
    title: "Order List",
    category: "order",
    head: tableHead.order,
    body: tableRows.order,
    extra: {
      isExtra: true,
      extraHead: tableHead.purchased,
    },
    isControl: false,
    searchBy: "id",
  };
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  const orderList = useSelector((state) => state.order.orderList);
  const [page, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dec, setDec] = useState(true);
  const [sortDesc, setSortDesc] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [dataSorted, setDataSorted] = useState([...data.body]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedData, setSelectedData] = useState(data.body);
  const [data1, setData] = useState({
    title: "Order List",
    head: tableHead.order,
    body: orderList,
    searchBy: "id",
  });

  // Set max page for pagination
  const maxPage =
    selectedData.length % rowsPerPage === 0
      ? parseInt(selectedData.length / rowsPerPage)
      : parseInt(selectedData.length / rowsPerPage + 1);

  // Handle pagination change page
  const handleChangePage = (event, value) => {
    setPageIndex(value - 1);
  };

  // Handle change rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPageIndex(0);
  };

  // Update the order list
  useEffect(() => {
    setData({ ...data1, body: orderList });
    // setDataSorted([...data1.body.reverse()]);
  }, [orderList]);

  // Use Effect Sort page
  useEffect(() => {
    let currentData = [];
    if (sortBy === "DATE") {
      currentData = [
        ...selectedData.sort((a, b) => {
          let aDate = new Date(a.date);
          let bDate = new Date(b.date);
          if (aDate < bDate) {
            return sortDesc ? 1 : -1;
          } else if (aDate > bDate) {
            return sortDesc ? -1 : 1;
          }
          return 0;
        }),
      ];
    } else {
      if (
        selectedData.length > 0 &&
        selectedData[0].hasOwnProperty(sortBy.toLocaleLowerCase())
      ) {
        currentData = [
          ...selectedData.sort((a, b) => {
            if (a[sortBy.toLowerCase()] < b[sortBy.toLowerCase()]) {
              return sortDesc ? 1 : -1;
            } else if (a[sortBy.toLowerCase()] > b[sortBy.toLowerCase()]) {
              return sortDesc ? -1 : 1;
            }
            return 0;
          }),
        ];
      } else currentData = [...selectedData];
    }
    let updateData = currentData.map((e, index) => {
      return { ...e, no: index + 1 };
    });
    setDataSorted(updateData);
  }, [dec]);

  // Handle request sort by category
  const requestSort = (category) => {
    if (sortBy === category) {
      setSortDesc(!sortDesc);
    } else {
      setSortDesc(false);
      setSortBy(category);
    }
    setDec(!dec);
  };

  // Handle Input Search
  const handleInputSearch = (value) => {
    setSearchValue(value);
  };

  // Handle Search
  const handleSubmitSearch = () => {
    let searchArray = [];
    searchArray =
      searchValue.trim().length === 0
        ? data.body
        : data.body.filter((element) => {
            return element[data.searchBy]
              .toLocaleLowerCase()
              .includes(searchValue.trim().toLocaleLowerCase());
          });
    setSelectedData(searchArray);
    setDec(!dec);
  };

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

  return (
    <Paper
      sx={{
        borderRadius: 2,
        boxShadow: `4px 4px 4px ${theme.shadow}`,
        width: "100%",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        borderBottom={"1px solid black"}
        alignItems="center"
        paddingLeft={2}
      >
        <Typography variant="h6">{data.title}</Typography>
        <Box
          component={"form"}
          sx={{ m: 1, display: "flex", alignItems: "center" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitSearch();
          }}
        >
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder={`Search by ${data.searchBy}`}
            onChange={(e) => {
              handleInputSearch(e.target.value);
            }}
          />
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, ml: 1 }}
            type="submit"
          >
            <Search />
          </IconButton>
        </Box>
      </Stack>
      {/* Table Order */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 0,
          backgroundColor: "transparent",
        }}
      >
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
                  style={{ minWidth: "50px", overflow: "visible" }}
                  key={index}
                  align="center"
                  onClick={() => {
                    requestSort(item);
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <Stack direction={"row"} gap={1} justifyContent="center">
                    {item != "NO" && (
                      <SortIcon sortDesc={sortDesc} isSort={sortBy == item} />
                    )}
                    <Box sx={{ whiteSpace: "nowrap" }}>{item}</Box>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {dataSorted
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row
                  key={row.id}
                  row={row}
                  extraData={data.extra}
                  isControl={data.isControl}
                  category={data.category}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
        paddingBottom={2}
      >
        <Stack direction={"row"} alignItems="center" ml={2}>
          <Typography>Rows per page:</Typography>
          <FormControl variant="standard" sx={{ ml: 2, minWidth: 50 }}>
            {/* <InputLabel id="rows-per-page"></InputLabel> */}
            <Select
              labelId="rows-per-page"
              defaultValue={5}
              onChange={handleChangeRowsPerPage}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack sx={{ flex: 1 }} direction="row" justifyContent={"center"}>
          <Pagination
            count={maxPage}
            size="large"
            siblingCount={2}
            boundaryCount={2}
            showFirstButton
            showLastButton
            onChange={handleChangePage}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
