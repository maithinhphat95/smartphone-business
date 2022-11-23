import productApi from "../../apis/productApi";
// initial state
const initialState = {
  productList: [],
  selectedProduct: {},
};
// Product Action----------------------------------------------------
// Get All
export const getProductList = (data) => {
  return {
    type: "GET_PRODUCT_LIST",
    payload: data,
  };
};
// Get Product List Request
export const getProductListRequest = () => {
  return (dispatch) => {
    (async () => {
      try {
        const data = await productApi.getAll();
        dispatch(getProductList(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// Get product
export const getProduct = (data) => {
  return {
    type: "GET_PRODUCT",
    payload: data,
  };
};
// Get Product Item Request
export const getProductRequest = (id) => {
  return (dispatch) => {
    (async () => {
      try {
        const data = await productApi.getProduct(id);
        dispatch(getProduct(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// Add
export const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};
// Add Request, update product List
export const addProductRequest = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await productApi.add(data);
        dispatch(addProduct(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// Update product Request
export const updateProductRequest = (id, data) => {
  return (dispatch) => {
    (async () => {
      try {
        await productApi.put(id, data);
        dispatch(getProductListRequest());
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// Delete product
export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};
// Delete Product Item Request
export const deleteProductRequest = (id) => {
  return (dispatch) => {
    (async () => {
      try {
        const response = await productApi.delete(id);
        dispatch(getProductListRequest());
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// Product Reducer --------------------------------------------------
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_LIST":
      // localStorage.setItem("productList", JSON.stringify(action.payload));
      return {
        ...state,
        productList: action.payload,
      };
    case "GET_PRODUCT":
      // localStorage.setItem("selectedProduct", JSON.stringify(action.payload));
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    // case "DELETE_PRODUCT":
    //   return {};
    default:
      return { ...state };
  }
};
