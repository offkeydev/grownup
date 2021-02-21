import {combineReducers} from "redux"
import modalAdd from "./reducers/modalAdd";
import auth from "./reducers/auth";
import errors from "./reducers/errors";

export default combineReducers({
    modalAdd: modalAdd,
    auth: auth,
    errors: errors,
})