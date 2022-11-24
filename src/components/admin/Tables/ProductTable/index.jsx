import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  IconButton,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { Delete, Edit, Search, ViewList } from "@mui/icons-material";
import {
  adminColorDark,
  adminColorLight,
  tableHead,
} from "../../../../constant/admin";
import Label from "../../Label";
import { deleteProductRequest } from "../../../../redux/common/productReducer";
import SortIcon from "../../SortIcon";
import "./style.scss";
import DeleteDialog from "../DeleteDialog";

// Function show each row of tablebody (order item)
function Row(props) {
  const { row } = props;
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

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

  // Request open Delete Dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Request Close Delete Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate("/admin/inventory");
  };

  return (
    <>
      <TableRow className="product-table-row">
        <>
          <TableCell align="center">{row.no}</TableCell>
          <TableCell align="center">{row.productId}</TableCell>
          <TableCell align="left">
            <Stack className="img-name" direction={"row"} alignItems="center">
              <CardMedia
                component="img"
                image={row.img}
                alt={row.name}
                sx={{ width: "40px", marginRight: 1 }}
              />
              <Typography variant="p" minWidth={"100px"}>
                {row.name}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell>
            <Label
              content={row.brand}
              backgroundColor={theme[`${row.brand.toLocaleLowerCase()}`]}
            />
          </TableCell>
          <TableCell align="center">
            <Stack spacing={1} direction="row">
              {row.color?.map((e, index) => (
                <Label
                  key={index}
                  content={e.name}
                  backgroundColor={e.code}
                  borderColor="black"
                />
              ))}
            </Stack>
          </TableCell>
          <TableCell>
            <Box color={"darkblue"} fontWeight="500">{`${Number(
              row.priceNew
            ).toLocaleString()} VND`}</Box>
          </TableCell>
          <TableCell>
            {row.memory ? (
              <Label
                content={row.memory + " GB"}
                borderColor={theme[`${row.brand.toLocaleLowerCase()}`]}
                backgroundColor="white"
                width="80px"
              />
            ) : (
              "No Data"
            )}
          </TableCell>
          <TableCell>
            <Label
              content={row.stock + " pcs"}
              borderColor={theme[`${row.brand.toLocaleLowerCase()}`]}
              backgroundColor="white"
              width="80px"
            />
          </TableCell>
          <TableCell>
            <Label
              content={row.sold + " pcs"}
              borderColor={theme[`${row.brand.toLocaleLowerCase()}`]}
              backgroundColor="white"
              width="80px"
            />
          </TableCell>
        </>

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
            <Link to={`/admin/product/${row.brand}/${row.id}`}>
              <Button
                title="Edit Product"
                className="action-button"
                variant="contained"
                color="info"
                sx={{ padding: 0.5, minWidth: 0 }}
              >
                <Edit />
              </Button>
            </Link>
            <Button
              title="Delete Product"
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
            <DeleteDialog
              open={openDialog}
              onClose={handleCloseDialog}
              id={row.id}
              category="product"
            />
          </Stack>
          <ToastContainer />
        </TableCell>
      </TableRow>
    </>
  );
}

// -------------------------------------------------------------------------------------------------------
// Component Product Table
export default function ProductTable(props) {
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  const productList = useSelector((state) => state.product.productList);
  const [page, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isUpdate, setIsUpdate] = useState(true);
  const [sortDesc, setSortDesc] = useState(true);
  const [sortBy, setSortBy] = useState("ID");
  const [category, setCategory] = useState(sortBy);
  const [data, setData] = useState({
    title: "Product List",
    head: tableHead.product,
    body: productList,
    searchBy: "name",
  });
  const [dataSorted, setDataSorted] = useState([...data.body.reverse()]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedData, setSelectedData] = useState(data?.body || []);

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

  // Update the product list
  useEffect(() => {
    setData({ ...data, body: productList });
    setDataSorted([...data.body.reverse()]);
  }, [productList]);

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

  // Update category
  useEffect(() => {
    switch (sortBy) {
      case "ITEM ID":
        setCategory("productId");
        break;
      case "PRICE":
        setCategory("priceNew");
        break;
      default:
        setCategory(sortBy.toLowerCase());
        break;
    }
  }, [sortBy, category]);

  // Use Effect Sort page
  useEffect(() => {
    let currentData = [];
    if (selectedData.length > 0 && selectedData[0].hasOwnProperty(category)) {
      currentData = [
        ...selectedData.sort((a, b) => {
          if (category === "name") {
            if (a[category].toLowerCase() < b[category].toLowerCase()) {
              return sortDesc ? 1 : -1;
            } else if (a[category].toLowerCase() > b[category].toLowerCase()) {
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

    setDataSorted(
      currentData?.map((e, index) => {
        return { ...e, no: index + 1 };
      })
    );
  }, [isUpdate, productList, category, sortBy]);

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
              .toLocaleLowerCase()
              .includes(searchValue.trim().toLocaleLowerCase());
          });
    setSelectedData(searchArray);
    setIsUpdate(!isUpdate);
  };

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
        <Typography
          variant="h6"
          component="h6"
          fontWeight="600"
          fontSize="20px"
        >
          <ViewList /> {data.title}
        </Typography>
        <Stack direction={"row"}>
          {/* Search Box */}
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
              sx={{ ml: 1 }}
              type="submit"
            >
              <Search />
            </IconButton>
          </Box>
          {/* Add Product Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              margin: "8px 16px",
              "& a": { color: "white", textDecoration: "none" },
            }}
          >
            <Link to={"/admin/product/create"}>Add Product</Link>
          </Button>
        </Stack>
      </Stack>
      {/* Table */}
      <TableContainer component={Paper} width={"100%"} sx={{ borderRadius: 0 }}>
        <Table>
          <TableHead
            sx={{
              borderBottom: "1px solid black",
              "& th": { borderBottom: "none", fontWeight: "bold" },
            }}
          >
            <TableRow sx={{ "& th": { padding: 1.5 } }}>
              {data.head?.map((item, index) => (
                <TableCell
                  style={{ minWidth: "20px", textOverflow: "clip" }}
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
          {/* Body of table */}
          <TableBody>
            {dataSorted
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => (
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
