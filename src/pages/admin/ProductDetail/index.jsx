import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import {
  Typography,
  Box,
  Stack,
  CircularProgress,
  CardMedia,
  Button,
  FormControl,
  Paper,
} from "@mui/material";
import { ModeEdit, Restore } from "@mui/icons-material";
import {
  getProductRequest,
  updateProductRequest,
} from "../../../redux/common/productReducer";
import PageTitle from "../../../components/admin/PageTitle";
import Label from "../../../components/admin/Label";
import { adminColorDark, adminColorLight } from "../../../constant/admin";
import "./style.scss";
ProductDetail.propTypes = {};

function ProductDetail(props) {
  const { brand, productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const [data, setData] = useState(selectedProduct);
  const [isLoading, setLoading] = useState(true);
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  const [showImg, setShowImgInput] = useState(false);
  const [imgUrl, setImgUrl] = useState(data.img);
  const [defaultValue, setDefaultValue] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    resetField,
  } = useForm();

  // Fake loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return clearTimeout();
  }, []);

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

  // Handle show picture img
  const handleShowInput = () => {
    setShowImgInput(!showImg);
  };

  // Handle Apply the img url
  const handleApplyChangeImg = (url) => {
    setImgUrl(url);
  };
  const handleResetImg = () => {
    setImgUrl(data.img);
    resetField("img", { defaultValue: data.img });
  };

  // Handle submit update
  const onHandleSubmit = (object, e) => {
    const updateData = { ...object, color: data.color };
    dispatch(updateProductRequest(productId, updateData));

    toast("Update Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  };

  // Handle error
  const onHandleError = (error, e) => {
    console.log(error);
  };

  // Handle reset default
  const handleReset = () => {
    reset(defaultValue);
  };

  // Fetch Data
  useEffect(() => {
    setLoading(true);
    dispatch(getProductRequest(productId));
  }, []);

  // Update data state
  useEffect(() => {
    setData(selectedProduct);
    setDefaultValue(data);
    setImgUrl(data.img);
  }, [selectedProduct]);

  return (
    <>
      <ToastContainer />
      <PageTitle
        title="Product Information"
        description="View detail and update product information"
      />
      <Paper
        sx={{
          borderRadius: 2,
          boxShadow: "4px 4px 4px #ccc",
          width: "100%",
          padding: 2,
        }}
      >
        <Box sx={{ margin: "0 auto" }}>
          {isLoading ? (
            <Stack
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItem: "center",
              }}
              spacing={2}
              direction="row"
            >
              <CircularProgress color="primary" />
              <CircularProgress color="primary" />
              <CircularProgress color="primary" />
            </Stack>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexDirection: "column",
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <form onSubmit={handleSubmit(onHandleSubmit, onHandleError)}>
                <Box className="product-edit-form">
                  {/* Left column */}
                  <Box className="form-column form-left">
                    {/* Picture */}
                    <CardMedia
                      component="img"
                      alt={data.name}
                      src={
                        imgUrl ||
                        "https://www.freeiconspng.com/thumbs/phone-icon/phone-icon-by-minduka--a-simple-phone-icon-22.png"
                      }
                      sx={{
                        width: 200,
                        height: 200,
                        mb: 0.5,
                        zIndex: 0,
                      }}
                    />
                    <Box width={"100%"}>
                      <FormControl className="form-control mt-8">
                        <Button
                          className={`form-item form-item-action ${
                            showImg && "item-left"
                          }`}
                          sx={{
                            backgroundColor: theme.primary,
                            color: "black",
                            border: `1px solid ${theme.primary}`,
                            "&:hover": {
                              backgroundColor: theme.secondary,
                              color: theme.textColor,
                            },
                          }}
                          onClick={handleShowInput}
                        >
                          <ModeEdit
                            sx={{
                              marginRight: 1,
                            }}
                            fontSize={"small"}
                          />
                          Change Picture
                        </Button>
                        {showImg && (
                          <Button
                            className="item-right"
                            sx={{
                              backgroundColor: theme.primary,
                              color: "black",
                              border: `1px solid ${theme.primary}`,
                              borderLeftColor: "black",
                              "&:hover": {
                                backgroundColor: theme.secondary,
                                color: theme.textColor,
                              },
                            }}
                            title="Restore Image"
                            onClick={handleResetImg}
                          >
                            <Restore />
                          </Button>
                        )}
                      </FormControl>

                      <FormControl
                        className={`mt-8 form-control ${!showImg && "hidden"}`}
                        fullWidth
                      >
                        <input
                          className="form-item form-input-url item-left"
                          type="text"
                          title="Img Url"
                          name="img"
                          defaultValue={data.img}
                          {...register("img")}
                        />
                        <Button
                          className="item-right"
                          sx={{
                            border: `1px solid ${theme.primary}`,
                            borderLeftColor: "black",
                            "&:hover": {
                              backgroundColor: theme.secondary,
                              color: theme.textColor,
                            },
                          }}
                          onClick={() => {
                            handleApplyChangeImg(getValues("img"));
                          }}
                        >
                          Apply
                        </Button>
                      </FormControl>
                    </Box>
                  </Box>
                  {/* center column */}
                  <Box className="form-column form-center">
                    {/* Name of Product */}
                    <Stack className="form-row">
                      <Typography className="form-label" variant="h6">
                        Name:
                      </Typography>
                      <input
                        className="form-input-text"
                        type="text"
                        name="name"
                        defaultValue={data.name}
                        {...register("name", { required: true })}
                      />
                    </Stack>
                    {/* Brand of Product */}
                    <Stack className="form-row">
                      <Typography className="form-label" variant="h6">
                        Brand:
                      </Typography>
                      <input
                        className="form-input-text"
                        type="text"
                        name="brand"
                        defaultValue={data.brand}
                        {...register("brand", { required: true })}
                      />
                    </Stack>
                    {/* Id of Product */}
                    <Stack className="form-row">
                      <Typography className="form-label" variant="h6">
                        ID code:
                      </Typography>
                      <div className="form-input-text">{data.id}</div>
                      {/* <input
                        className="form-input-text"
                        type="text"
                        name="id"
                        defaultValue={data.id}
                        {...register("id", { required: true })}
                      /> */}
                    </Stack>
                    {/* PriceOld of Product */}
                    <Stack className="form-row">
                      <Typography className="form-label" variant="h6">
                        Price Old:
                      </Typography>
                      <div className="relative">
                        <input
                          className="form-input-text"
                          type="number"
                          name="priceOld"
                          defaultValue={data.priceOld}
                          {...register("priceOld", { required: true })}
                        />
                        <Typography className="unit">VND</Typography>
                      </div>
                    </Stack>
                    {/* priceNew of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Price New:
                      </Typography>
                      <div className="relative">
                        <input
                          className="form-input-text"
                          type="number"
                          name="priceNew"
                          defaultValue={data.priceNew}
                          {...register("priceNew", { required: true })}
                        />
                        <Typography className="unit">VND</Typography>
                      </div>
                    </Stack>

                    {/* memory of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Memory:
                      </Typography>
                      <select
                        className="form-input-text"
                        name="memory"
                        defaultValue={data.memory}
                        {...register("memory", { required: true })}
                      >
                        <option value="32">32GB</option>
                        <option value="64">64 GB</option>
                        <option value="128">128 GB</option>
                        <option value="256">256 GB</option>
                        <option value="512">512 GB</option>
                      </select>
                    </Stack>

                    {/* Color of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Colors:
                      </Typography>
                      <Stack direction={"row"} gap={2}>
                        {data.color.map((item, index) => {
                          return (
                            <Label
                              key={index}
                              content={item.name}
                              backgroundColor={item.code}
                              borderColor={"black"}
                            />
                          );
                        })}
                      </Stack>
                    </Stack>

                    {/* Description of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Description:
                      </Typography>
                      <textarea
                        className="form-input-text"
                        type="text"
                        name="description"
                        defaultValue={data.description}
                        {...register("description", { required: true })}
                      />
                    </Stack>

                    {/* Description Price of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Group Price:
                      </Typography>
                      <select
                        className="form-input-text"
                        name="descriptionPrice"
                        defaultValue={data.descriptionPrice}
                        {...register("descriptionPrice", { required: true })}
                      >
                        <option value="duoi-2-trieu">Dưới 2 triệu</option>
                        <option value="tu-2-4-trieu">Từ 2 - 4 triệu</option>
                        <option value="tu-4-7-trieu">Từ 4 - 7 triệu</option>
                        <option value="tu-7-13-trieu">Từ 7 - 13 triệu</option>
                        <option value="tren-13-trieu">Trên 13 triệu</option>
                      </select>
                    </Stack>
                    {/* Stock of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Stock:
                      </Typography>
                      <div className="relative">
                        <input
                          className="form-input-text"
                          type="number"
                          name="stock"
                          defaultValue={data.stock}
                          {...register("stock", { required: true })}
                        />
                        <Typography className="unit">PCS</Typography>
                      </div>
                    </Stack>
                    {/* Sold of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Sold:
                      </Typography>
                      <div className="relative">
                        <input
                          className="form-input-text"
                          type="number"
                          name="sold"
                          defaultValue={data.sold}
                          {...register("sold", { required: true })}
                        />
                        <Typography className="unit">PCS</Typography>
                      </div>
                    </Stack>
                    {/* Form Action */}
                    <Stack className="form-row form-action">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                      <Button variant="contained" color="success" type="submit">
                        Update & Save
                      </Button>
                    </Stack>
                  </Box>
                  {/* Right column */}
                  <Box
                    sx={{ display: { xs: "none", md: "flex" } }}
                    className=" form-right"
                  >
                    <CardMedia
                      component="img"
                      alt={"TPSmartPhone"}
                      src={
                        "https://img.freepik.com/premium-vector/phone-logo-set-color-style-use-smartphone-shop-service_111651-263.jpg?w=2000"
                      }
                      sx={{
                        width: "100%",
                        mb: 0.5,
                        zIndex: 0,
                      }}
                    />
                    <CardMedia
                      component="img"
                      alt={"TPSmartPhone"}
                      src={
                        "https://thumbs.dreamstime.com/b/stay-home-shop-online-shopping-quote-slogan-t-shirt-print-vector-illustration-88808300.jpg"
                      }
                      sx={{
                        width: "100%",
                        mb: 0.5,
                        zIndex: 0,
                      }}
                    />
                  </Box>
                </Box>
              </form>
            </Box>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default ProductDetail;
