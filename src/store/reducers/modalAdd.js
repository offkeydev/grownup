// ACTION TYPES
const OPEN_ADD_MODAL = "OPEN_ADD_MODAL"
const CLOSE_ADD_MODAL = "CLOSE_ADD_MODAL"


//============
//============ ACTIONS
//============
export const openAddModal = () => {
    return{
        type: OPEN_ADD_MODAL,
    }
}

export const closeAddModal = () => {
    return{
        type: CLOSE_ADD_MODAL,
    }
}


//============
//============ REDUCER
//============

//INITIAL STATE
const initialState = {
    modalAdd: false
}

export default function (state = initialState, action){
    switch (action.type){
        case OPEN_ADD_MODAL:
            return{
                ...state,
                modalAdd: true,
            }
        case CLOSE_ADD_MODAL:
            return{
                ...state,
                modalAdd: false,
            }
        default: return state
    }
}