import {combineReducers} from "redux"
import modalAdd from "./reducers/modalAdd";
import auth from "./reducers/auth";

export default combineReducers({
    modalAdd: modalAdd,
    auth: auth
})