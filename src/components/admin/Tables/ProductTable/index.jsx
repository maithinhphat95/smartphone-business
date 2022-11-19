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
  CardMedia,
  TextField,
  TableSortLabel,
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

// Function show each row of tablebody (order item)
function Row(props) {
  const { row, isControl, category, index } = props;
  console.log(row);
  return (
    <>
      <TableRow
        sx={{
          "& > *": {
            padding: 1,
            borderBottom: "unset",
            "& td": { borderBottom: "none" },
          },
        }}
      >
        {category === "product" && (
          <>
            <TableCell align="center">{index}</TableCell>
            <TableCell align="center">{row.id}</TableCell>
            <TableCell align="left">
              <Stack direction={"row"} alignItems="center">
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
            <TableCell>{`${row.brand}`}</TableCell>
            <TableCell align="center">
              <Stack spacing={1} direction="row">
                {row.color.map((e, index) => (
                  <Typography key={index} variant="p">
                    {e}
                  </Typography>
                ))}
              </Stack>
            </TableCell>
            <TableCell>
              <Box>
                {/* <Typography>{`${row.priceOld.toLocaleString()} VND`}</Typography> */}
                <Typography>{`${row.priceNew.toLocaleString()} VND`}</Typography>
              </Box>
            </TableCell>
            <TableCell>{`${row.memoryIn} GB`}</TableCell>
            <TableCell>{`${row.stock} pcs`}</TableCell>
            <TableCell>{`${row.sold} pcs`}</TableCell>
          </>
        )}
        {isControl && (
          <TableCell>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Button
                className="action-button"
                variant="contained"
                color="info"
                startIcon={<Edit />}
              >
                Edit
              </Button>
              <Button
                className="action-button"
                variant="outlined"
                color="error"
                startIcon={<Delete />}
              >
                Delete
              </Button>
            </Stack>
          </TableCell>
        )}
      </TableRow>
    </>
  );
}

export default function ProductTable(props) {
  const { data } = props;
  const [page, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dec, setDec] = useState(true);
  const [sortDesc, setSortDesc] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [dataSorted, setDataSorted] = useState(data.body);
  const [searchValue, setSearchValue] = useState("");
  const [selectedData, setSelectedData] = useState(data?.body || []);
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
  // Use Effect Sort page
  useEffect(() => {
    let currentData = [];

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
      setSortDesc(true);
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
            return element[data.searchBy].includes(
              searchValue.trim().toLocaleLowerCase()
            );
          });
    setSelectedData(searchArray);
    setDec(!dec);
  };

  return (
    <Paper
      sx={{ borderRadius: 2, boxShadow: "4px 4px 4px #ccc", width: "100%" }}
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
      <TableContainer component={Paper} width={"100%"} sx={{ borderRadius: 0 }}>
        <Table>
          <TableHead
            sx={{
              borderBottom: "1px solid black",
              "& th": { borderBottom: "none", fontWeight: "bold" },
            }}
          >
            <TableRow sx={{ "& th": { padding: 1.5 } }}>
              {data.head.map((item, index) => (
                <TableCell
                  style={{ minWidth: "20px" }}
                  key={index}
                  align="center"
                  onClick={() => {
                    requestSort(item);
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <TableSortLabel
                    active={sortBy === item.toLocaleString()}
                    direction={
                      sortBy === item.toLocaleString()
                        ? sortDesc
                          ? "desc"
                          : "asc"
                        : "desc"
                    }
                  >
                    {item}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* Body of table */}
          <TableBody>
            {dataSorted
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <Row
                  key={row.id}
                  row={row}
                  isControl={data.isControl}
                  category={data.category}
                  index={index + 1}
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
