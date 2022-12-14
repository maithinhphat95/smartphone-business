import orderApi from "../../apis/orderApi";
// Initial state
const initialState = {
  orderList: [],
};
// Order Action----------------------------------------------------
// Get
export const getOrderList = (data) => {
  return {
    type: "GET_ORDER_LIST",
    payload: data,
  };
};
// Get Request
export const getOrderListRequest = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        const orderList = await orderApi.getAll();
        dispatch(getOrderList(orderList));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
// Add
export const addOrder = (data) => {
  return {
    type: "ADD_ORDER",
    payload: data,
  };
};

// Update Order Request
export const updateOrderRequest = (id, data) => {
  return (dispatch) => {
    (async () => {
      try {
        await orderApi.put(id, data);
        dispatch(getOrderListRequest());
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// Add Request, update Order List
export const addOrderRequest = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await orderApi.add(data);
        dispatch(addOrder(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// Delete Order Request
export const deleteOrderRequest = (id) => {
  return (dispatch) => {
    (async () => {
      try {
        const response = await orderApi.delete(id);
        dispatch(getOrderListRequest());
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// customer Reducer
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDER_LIST":
      return {
        ...state,
        orderList: action.payload,
      };
    case "ADD_ORDER":
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      };
    default:
      return { ...state };
  }
};
