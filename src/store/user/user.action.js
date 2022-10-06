import { createAction } from "../../utils/reducers/reducers.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user)=> {
   return createAction(USER_ACTION_TYPES.SET_CURRENT_USER , user)
}

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (email , password) => createAction(USER_ACTION_TYPES.EMIAL_SIGN_IN_START, {email, password})

export const signInSucess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCESS, user)

export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)


export const signUpStart = (email , password, displayName) => 
     createAction(USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName})

export const signUpSuccess = (user, additionalDetails) => 
             createAction(USER_ACTION_TYPES.SIGN_UP_SUCESS, {user , additionalDetails})

export const signUpFailed = (error) =>
            createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error)

export const signOutStart = () => 
   createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () => 
            createAction(USER_ACTION_TYPES.SIGN_OUT_SUCESS)

export const signOutFailed = (error) =>
            createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error)