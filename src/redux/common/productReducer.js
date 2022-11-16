import productApi from "../../apis/productApi";
// initial state
const initialState = {
  productList: [],
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
export const getProductListRequest = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        const response = await productApi.getAll();
        dispatch(getProductList(response.data));
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
        const response = await productApi.get(id);
        dispatch(getProduct(response.data));
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
// Add Request, update Order List
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

// customer Reducer
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_LIST":
      return {
        ...state,
        orderList: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      };
    default:
      return { ...state };
  }
};
