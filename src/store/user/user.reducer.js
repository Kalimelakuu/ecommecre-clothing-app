import { USER_ACTION_TYPES } from "./user.types";


const Initital_State = {
    currentUser : null
}
export const userReducer =  (state = Initital_State, action ={}) => {
   
    const {type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser : payload
            }
        default:
            return state

    }
}