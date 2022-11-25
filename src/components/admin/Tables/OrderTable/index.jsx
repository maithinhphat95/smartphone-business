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
import EditDialog from "../EditDialog";
import { ToastContainer } from "react-toastify";
import Label from "../../Label";

const ExtraTable = (props) => {
  const { row, isOpen } = props;
  const productList = useSelector((state) => state.product.productList);
  const [productData, setProductData] = useState([...productList]);
  const [extraData, setExtraData] = useState([]);

  // Update the product list
  useEffect(() => {
    setProductData([...productList]);

    // Build the extraData Array from orderItem.productList
    let newData = row.productList.map((item, index) => {
      for (let element of productData) {
        if (element.productId.toString() === item.productId.toString()) {
          return {
            ...item,
            no: index + 1,
            img: element.img,
            name: element.name,
            price: element.priceNew,
            total: element.priceNew * item.quantity,
          };
        }
      }
    });

    setExtraData(newData);
  }, [productList]);

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{
              margin: 1,
              // padding: 1,
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              Purchased list
            </Typography>
            <Table
              size="small"
              sx={{
                backgroundColor: adminColorLight.secondary,
                "& *": { backgroundColor: "transparent" },
                borderRadius: "8px",
                "& td, th": { padding: "8px 16px" },
                // margin: "8px",
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
                  {tableHead.purchased.map((item, index) => (
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
                  "& tr:last-child": { borderBottom: "none" },
                  "& td": { border: "none" },
                }}
              >
                {extraData.map((item, index) => {
                  return (
                    <TableRow key={index}>
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
                          image={item?.img}
                          alt={item.name}
                          sx={{ width: "40px", marginRight: "10px" }}
                        />
                        <Typography variant="p">{item?.name}</Typography>
                      </TableCell>

                      {/* Quantity */}
                      <TableCell align="center">
                        {item?.quantity.toLocaleString()}
                      </TableCell>

                      {/* Price */}
                      <TableCell align="right">
                        {`$${item?.price.toLocaleString()}`}
                      </TableCell>

                      {/* Total */}
                      <TableCell align="right">
                        {`$${item?.total.toLocaleString()}`}
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
  const { row } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const navigate = useNavigate();

  // Request open Delete Dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  // Request open Edit Dialog
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  // Request Close Delete Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setOpenEdit(false);
    navigate("/admin/revenue");
  };
  return (
    <>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset", "& td": { borderBottom: "none" } },
        }}
      >
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
        <TableCell align="center">{row.orderId}</TableCell>
        <TableCell align="center">{row.userName}</TableCell>
        <TableCell align="center">{row.createDate}</TableCell>
        <TableCell align="center">{row.completeDate}</TableCell>
        <TableCell>
          <Box
            color={"darkblue"}
            fontWeight="500"
            textAlign={"right"}
          >{`${row.total.toLocaleString()} VND`}</Box>
        </TableCell>
        <TableCell>
          <Stack direction={"row"} justifyContent={"center"}>
            <Label
              content={row.status}
              backgroundColor={
                row.status == "done"
                  ? "green"
                  : row.status == "delevering"
                  ? "blue"
                  : "red"
              }
              textColor="white"
              width="80px"
            />
          </Stack>
        </TableCell>
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
              onClick={handleOpenEdit}
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
                handleOpenDialog();
              }}
            >
              <Delete />
            </Button>
            <EditDialog
              open={openEdit}
              onClose={handleCloseDialog}
              order={row}
            />
            <DeleteDialog
              open={openDialog}
              onClose={handleCloseDialog}
              id={row.id}
              category="order"
            />
          </Stack>
          {/* <ToastContainer /> */}
        </TableCell>
      </TableRow>
      {/* The table of purchasing list of order item */}
      <ExtraTable row={row} isOpen={isOpen} />
    </>
  );
}

export default function OrderTable(props) {
  const orderList = useSelector((state) => state.order.orderList);
  const [data, setData] = useState({
    title: "Order List",
    head: tableHead.order,
    body: orderList,
    searchBy: "id",
  });
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  const [page, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isUpdate, setIsUpdate] = useState(true);
  const [sortDesc, setSortDesc] = useState(true);
  const [sortBy, setSortBy] = useState("ORDER DATE");
  const [category, setCategory] = useState("");
  const [dataSorted, setDataSorted] = useState([...data.body]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedData, setSelectedData] = useState(data.body);

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
    setData({ ...data, body: orderList });
  }, [orderList]);

  // Update category
  useEffect(() => {
    switch (sortBy) {
      case "ID":
        setCategory("orderId");
        break;
      case "USER":
        setCategory("userName");
        break;
      case "ORDER DATE":
        setCategory("createDate");
        break;
      case "COMPLETE DATE":
        setCategory("completeDate");
        break;
      default:
        setCategory(sortBy.toLowerCase());
        break;
    }
  }, [sortBy, category]);

  // Use Effect Sort page
  useEffect(() => {
    let currentData = [];
    if (category === "createDate" || category === "completeDate") {
      currentData = [
        ...selectedData.sort((a, b) => {
          let aDate = new Date(a[category]);
          let bDate = new Date(b[category]);
          if (aDate < bDate) {
            return sortDesc ? 1 : -1;
          } else if (aDate > bDate) {
            return sortDesc ? -1 : 1;
          }
          return 0;
        }),
      ];
    } else {
      // if (selectedData.length > 0 && selectedData[0].hasOwnProperty(category)) {
      if (selectedData.length > 0) {
        currentData = [
          ...selectedData.sort((a, b) => {
            if (category === "userName") {
              if (a[category]?.toLowerCase() < b[category]?.toLowerCase()) {
                return sortDesc ? 1 : -1;
              } else if (
                a[category].toLowerCase() > b[category].toLowerCase()
              ) {
                return sortDesc ? -1 : 1;
              }
            } else {
              if (a[category] < b[category]) {
                return sortDesc ? 1 : -1;
              } else if (a[category] > b[category]) {
                return sortDesc ? -1 : 1;
              }
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
  }, [isUpdate, orderList, category, sortBy]);

  // Handle request sort by category
  const requestSort = (item) => {
    if (sortBy === item) {
      setSortDesc(!sortDesc);
    } else {
      setSortDesc(false);
      setSortBy(item);
    }
    setIsUpdate(!isUpdate);
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
              .toString()
              .toLocaleLowerCase()
              .includes(searchValue.trim().toLocaleLowerCase());
          });
    setSelectedData(searchArray);
    setIsUpdate(!isUpdate);
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
      <ToastContainer />
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
              <TableCell align="center" width="10px" />
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
                <Row key={row.id} row={row} />
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
