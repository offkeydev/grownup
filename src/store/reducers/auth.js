import fbase from "../../firebase";
import axios from "axios";

// ACTION TYPES
const REGISTER_USER = "REGISTER_USER"
const LOGIN_USER = "LOGIN_USER"


//============
//============ THUNK
//============
export const registerUserAC = (user) => {
    return async dispatch => {

    }
}



//============
//============ ACTIONS
//============
export const registerUser = (user) => {
    return{
        type: REGISTER_USER,
        payload: user
    }
}

//============
//============ REDUCER
//============
//INITIAL STATE
const initialState = {
    user: null
}


export default function (state = initialState, action){
    switch (action.type){
        case REGISTER_USER:
            return{
                ...state,
                user: action.payload,
            }

        default: return state
    }
}