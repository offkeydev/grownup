// ACTION TYPES
const SET_LOAD = "SET_LOAD"

//Actions
export const setLoader = (param) => {
    return{
        type: SET_LOAD,
        payload: param
    }
}

//Initial state
const initialState = {
    loader: false
}

export default function (state = initialState, action){
    switch (action.type){
        case SET_LOAD:
            return{
                ...state,
                loader: action.payload,
            }

        default: return state
    }
}