import { combineReducers } from "redux";
import { adminReducer } from "./admin/adminReducer";
import { productReducer } from "./common/productReducer";
import { orderReducer } from "./common/orderReducer";
import { userReducer } from "./common/userReducer";
import { customerReducer } from "./customer/customerReducer";
const rootReducer = combineReducers({
  admin: adminReducer,
  customer: customerReducer,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
});
export default rootReducer;
