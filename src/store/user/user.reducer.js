import { USER_ACTION_TYPES } from "./user.types";


const Initital_State = {
    currentUser : null,
    isLoading: false,
    error: null
}
export const userReducer =  (state = Initital_State, action ={}) => {
   
    const {type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.SIGN_IN_SUCESS:
            return {
                ...state,
                currentUser : payload
            }
        case USER_ACTION_TYPES.SIGN_OUT_SUCESS:
            return {
                ...state,
                currentUser : null
            }
       case USER_ACTION_TYPES.SIGN_IN_FAILURE:
       case USER_ACTION_TYPES.SIGN_UP_FAILURE:
       case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
            return {
                ...state,
                error : payload
            }
        default:
            return state

    }
}