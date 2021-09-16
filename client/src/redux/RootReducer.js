import { combineReducers } from "redux";
import posts from "../reducers/posts";
import auth from "../reducers/auth";

const rootReducers = combineReducers({ posts, auth });
export default rootReducers;