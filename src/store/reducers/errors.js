// ACTION TYPES
const SET_ERROR = "SET_ERROR"
const UNSET_ERROR = "UNSET_ERROR"


//============
//============ THUNK
//============
export const setErrorTH = (error) => {
    return dispatch => {
        dispatch(setError(error))
        setTimeout(() => {
            dispatch(unsetError())
        },3000)
    }
}

//ACTIONS
export const setError = (error) => {
    return{
        type: SET_ERROR,
        payload: error
    }
}
export const unsetError = () => {
    return{
        type: UNSET_ERROR,
        payload: null
    }
}

//============
//============ REDUCER
//============
//INITIAL STATE
const initialState = {
    error: null
}

export default function (state = initialState, action){
    switch (action.type){
        case SET_ERROR:
            return{
                ...state,
                error: action.payload,
            }

        case UNSET_ERROR:
            return{
                ...state,
                error: action.payload,
            }

        default: return state
    }
}
