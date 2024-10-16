import { createStore } from "redux";
import userReducer from "./redux/Reducer";

const store = createStore(userReducer)
export default store