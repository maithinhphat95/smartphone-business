import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
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
import {
  adminColorDark,
  adminColorLight,
  phoneColor,
} from "../../../constant/admin";
import { addProductRequest } from "../../../redux/common/productReducer";
import PageTitle from "../../../components/admin/PageTitle";
import { ModeEdit, Restore } from "@mui/icons-material";
import Label from "../../../components/admin/Label";
// import "./style.scss";
ProductCreate.propTypes = {};

function ProductCreate(props) {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const productList = useSelector((state) => state.product.productList);
  const themeSeleted = useSelector((state) => state.admin.theme);
  const [data, setData] = useState(selectedProduct);
  const [isLoading, setLoading] = useState(true);
  const [theme, setTheme] = useState(adminColorLight);
  const [showImg, setShowImg] = useState(false);
  const defaultImg =
    "https://www.freeiconspng.com/thumbs/phone-icon/phone-icon-by-minduka--a-simple-phone-icon-22.png";
  const [imgUrl, setImgUrl] = useState(defaultImg);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
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
  const handleShowImg = () => {
    setShowImg(!showImg);
  };

  // Handle Apply the img url
  const handleApplyChangeImg = (url) => {
    setImgUrl(url);
  };

  const handleResetImg = () => {
    setImgUrl(defaultImg);
    resetField("img", {
      defaultValue: defaultImg,
    });
  };

  // Function check existing id
  const checkId = (id) => {
    return productList.some((e) => {
      return e.productId === id;
    });
  };
  // Function check existing name
  const checkName = (name) => {
    return productList.some((e) => {
      return e.name.toLowerCase() === name.toLowerCase();
    });
  };

  // Handle submit update
  const onHandleSubmit = (data, e) => {
    const colorArray = data.color.map((item) => {
      for (const element of phoneColor) {
        if (element.name === item) {
          return element;
        }
      }
    });
    const newProduct = { ...data, color: colorArray };
    dispatch(addProductRequest(newProduct));
    toast("Add New Product Successfully", {
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

  // Update data state
  useEffect(() => {
    setData(selectedProduct);
    setImgUrl(data.img);
  }, [selectedProduct]);

  return (
    <>
      <ToastContainer />
      <PageTitle
        title="Product Create Form"
        description="Create a new product for your store"
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
                      alt={"Product Image"}
                      src={imgUrl || defaultImg}
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
                          onClick={handleShowImg}
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
                      {/* Input img box */}
                      <FormControl
                        className={`mt-8 form-control ${!showImg && "hidden"}`}
                        fullWidth
                      >
                        <input
                          className="form-item form-input-url item-left"
                          type="text"
                          title="Img Url"
                          name="img"
                          defaultValue={defaultImg}
                          {...register("img", { required: true })}
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

                      {errors.img?.type === "required" && (
                        <Typography color="red" alignSelf={"flex-end"}>
                          * Please input a image link
                        </Typography>
                      )}
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
                        defaultValue={""}
                        style={errors.name && { borderColor: "red" }}
                        {...register("name", {
                          required: true,
                          validate: { exist: (v) => !checkName(v) },
                        })}
                      />
                    </Stack>
                    {errors.name?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input product name
                      </Typography>
                    )}
                    {errors.name?.type === "exist" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Existing, please input other name
                      </Typography>
                    )}
                    {/* Brand of Product */}
                    <Stack className="form-row">
                      <Typography className="form-label" variant="h6">
                        Brand:
                      </Typography>
                      <select
                        className="form-input-text"
                        name="brand"
                        style={errors.brand && { borderColor: "red" }}
                        defaultValue={"Apple"}
                        {...register("brand", { required: true })}
                      >
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Vivo">Vivo</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Xiaomi">Xiaomi</option>
                      </select>
                    </Stack>
                    {errors.brand?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input product brand
                      </Typography>
                    )}
                    {/* Id of Product */}
                    <Stack className="form-row">
                      <Typography className="form-label" variant="h6">
                        ID code:
                      </Typography>
                      {/* <div className="form-input-text">{data.id}</div> */}
                      <input
                        className="form-input-text"
                        type="text"
                        name="productId"
                        style={errors.id && { borderColor: "red" }}
                        defaultValue={""}
                        {...register("productId", {
                          required: true,
                          validate: { exist: (v) => !checkId(v) },
                        })}
                      />
                    </Stack>
                    {errors.productId?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input product ID
                      </Typography>
                    )}
                    {errors.productId?.type === "exist" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Existing, please input other ID
                      </Typography>
                    )}
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
                          style={errors.priceOld && { borderColor: "red" }}
                          defaultValue={""}
                          {...register("priceOld", {
                            required: true,
                            minLength: 6,
                          })}
                        />
                        <Typography className="unit">VND</Typography>
                      </div>
                    </Stack>
                    {errors.priceOld && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input number &gt; 99,000 VND
                      </Typography>
                    )}

                    {/* priceNew of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Price New:
                      </Typography>
                      <div className="relative">
                        <input
                          className="form-input-text"
                          type="number"
                          style={errors.priceNew && { borderColor: "red" }}
                          name="priceNew"
                          defaultValue={""}
                          {...register("priceNew", {
                            required: true,
                            minLength: 6,
                          })}
                        />
                        <Typography className="unit">VND</Typography>
                      </div>
                    </Stack>
                    {errors.priceNew && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input number &gt; 99,000 VND
                      </Typography>
                    )}
                    {/* memory of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Memory:
                      </Typography>
                      <select
                        className="form-input-text"
                        name="memory"
                        style={errors.memory && { borderColor: "red" }}
                        defaultValue={"32"}
                        {...register("memory", { required: true })}
                      >
                        <option value="32">32GB</option>
                        <option value="64">64 GB</option>
                        <option value="128">128 GB</option>
                        <option value="256">256 GB</option>
                        <option value="512">512 GB</option>
                      </select>
                    </Stack>
                    {errors.memory?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please select product memory
                      </Typography>
                    )}
                    {/* Color of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Colors:
                      </Typography>
                      <Stack direction={"row"} flexWrap="wrap" gap={2}>
                        {phoneColor.map((item, index) => {
                          return (
                            <div key={index}>
                              <Label
                                content={item.name}
                                backgroundColor={item.code}
                                borderColor={"black"}
                                width="100px"
                              >
                                <input
                                  type="checkbox"
                                  {...register("color", { required: true })}
                                  value={item.name}
                                />
                              </Label>
                            </div>
                          );
                        })}
                      </Stack>
                    </Stack>
                    {errors.color?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please select product color
                      </Typography>
                    )}
                    {/* Description of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Description:
                      </Typography>
                      <textarea
                        className="form-input-text"
                        type="text"
                        style={errors.description && { borderColor: "red" }}
                        name="description"
                        defaultValue={""}
                        {...register("description", { required: true })}
                      />
                    </Stack>
                    {errors.description?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input description of product
                      </Typography>
                    )}
                    {/* Description Price of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Group Price:
                      </Typography>
                      <select
                        className="form-input-text"
                        style={
                          errors.descriptionPrice && { borderColor: "red" }
                        }
                        name="descriptionPrice"
                        defaultValue={"duoi-2-trieu"}
                        {...register("descriptionPrice", { required: true })}
                      >
                        <option value="duoi-2-trieu">Dưới 2 triệu</option>
                        <option value="tu-2-4-trieu">Từ 2 - 4 triệu</option>
                        <option value="tu-4-7-trieu">Từ 4 - 7 triệu</option>
                        <option value="tu-7-13-trieu">Từ 7 - 13 triệu</option>
                        <option value="tren-13-trieu">Trên 13 triệu</option>
                      </select>
                    </Stack>
                    {errors.descriptionPrice?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please select product color
                      </Typography>
                    )}
                    {/* Stock of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Stock:
                      </Typography>
                      <div className="relative">
                        <input
                          className="form-input-text"
                          type="number"
                          style={errors.stock && { borderColor: "red" }}
                          name="stock"
                          defaultValue={""}
                          {...register("stock", { required: true })}
                        />
                        <Typography className="unit">PCS</Typography>
                      </div>
                    </Stack>
                    {errors.stock?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input quantity stock in store
                      </Typography>
                    )}
                    {/* Sold of Product */}
                    <Stack className="form-row" position="relative">
                      <Typography className="form-label" variant="h6">
                        Sold:
                      </Typography>
                      <div className="relative">
                        <input
                          className="form-input-text"
                          type="number"
                          style={errors.sold && { borderColor: "red" }}
                          name="sold"
                          defaultValue={""}
                          {...register("sold", { required: true })}
                        />
                        <Typography className="unit">PCS</Typography>
                      </div>
                    </Stack>
                    {errors.sold?.type === "required" && (
                      <Typography color="red" alignSelf={"flex-end"}>
                        * Please input quantity sold
                      </Typography>
                    )}
                    {/* Form Action */}
                    <Stack className="form-row form-action">
                      <Button
                        variant="contained"
                        color="error"
                        // onClick={handleReset}
                        type="reset"
                      >
                        Reset
                      </Button>
                      <Button variant="contained" color="success" type="submit">
                        ADD PRODUCT
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

export default ProductCreate;
