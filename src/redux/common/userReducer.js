import userApi from "../../apis/userApi";
// initial state
const initialState = {
  userList: [],
  currentUser: {},
  isLogin: false,
};

// User Action--------------------------------------------------
// Get
export const getUserList = (data) => {
  return {
    type: "GET_USER_LIST",
    payload: data,
  };
};
// Get Request
export const getUserListRequest = () => {
  return (dispatch) => {
    (async () => {
      try {
        const response = await userApi.getAll();
        dispatch(getUserList(response.data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
// Login
export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
// Register
export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};
// Register Request
export const addUserRequest = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await userApi.add(data);
        dispatch(addUser(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
// Delete
export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
// Delete Request
export const deleteUserRequest = (id) => {
  return (dispatch) => {
    (async () => {
      try {
        await userApi.delete(id);
        dispatch(deleteUser(id));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

// User Reducer ---------------------------------------------------
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_LIST":
      return {
        ...state,
        userList: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    case "ADD_USER":
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case "DELETE_USER":
      let index = state.userList.findIndex((e) => e.id === action.payload);
      let newUserList = [...state.userList].splice(index, 1);
      return {
        ...state,
        userList: [...newUserList],
      };
    default:
      return { ...state };
  }
};
