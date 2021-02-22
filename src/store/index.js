import {combineReducers} from "redux"
import modalAdd from "./reducers/modalAdd";
import auth from "./reducers/auth";
import errors from "./reducers/errors";
import loader from "./reducers/loader";

export default combineReducers({
    modalAdd: modalAdd,
    auth: auth,
    errors: errors,
    loader: loader
})