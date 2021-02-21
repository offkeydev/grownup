import fbase from "../../firebase";
import axios from "axios";

// ACTION TYPES
const SET_USER = "SET_USER"
const UNSET_USER = "UNSET_USER"



//============
//============ ACTIONS
//============
export const setUser = (user) => {
    return{
        type: SET_USER,
        payload: user
    }
}

export const unsetUser = () => {
    return{
        type: UNSET_USER,
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
        case SET_USER:
            return{
                ...state,
                user: action.payload,
            }
        case UNSET_USER:
            return{
                ...state,
                user: null,
            }

        default: return state
    }
}