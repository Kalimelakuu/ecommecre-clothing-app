import {takeLatest, put, all , call} from 'redux-saga/effects'
import { USER_ACTION_TYPES } from './user.types';

import { signInSucess, signInFailed, signUpFailed, signUpSuccess, signOutSuccess, signOutFailed } from './user.action';
import { createUserDocumentFromAuth, 
            getCurrentUser,
        signInWithGooglePopup,
        signInAuthUserWithEmailAndPassword,
        createAuthUserWithEmailAndPassword,
        signOutUser
         } from './../../utils/firebase/firebase.utils';



export function* signOut(){
    try{
        yield call(signOutUser)
        yield put(signOutSuccess())
    } catch(error){
        yield put(signOutFailed(error))
    }
}
export function* signUp({payload : {email, password, displayName}}){
    try {
        const { user} = yield call(
            createAuthUserWithEmailAndPassword, email,password)
        yield put(signUpSuccess(user, {displayName}))
    } catch (error) {
        yield put(signUpFailed(error))
    }

}

export function* signInAfterSignUp({payload : {user, additionalDetails}}){
    yield call(getSnapShotFromUserAuth, user , additionalDetails)
}
export function* signInWithGoogle(){
    try{
        const { user} = yield call(signInWithGooglePopup)
        yield call(getSnapShotFromUserAuth, user)
    }catch(error){
        yield put(signInFailed(error))
    }
}
export function* signInWithEmail({payload : {email ,password}}){
    try{
        const { user} = yield call(signInAuthUserWithEmailAndPassword, email, password)
        yield call(getSnapShotFromUserAuth, user)
    }catch(error){
        yield put(signInFailed(error))
    }
}
export function* getSnapShotFromUserAuth(userAuth, additionalDetails){
    try{
        const userSnapShot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(signInSucess({id: userSnapShot.id, ...userSnapShot.data()}))
    }catch(error){
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return;
        yield call(getSnapShotFromUserAuth, userAuth)
    }catch(error){
        yield put(signInFailed(error))
    }
}
export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMIAL_SIGN_IN_START, signInWithEmail)
}
export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,signInWithGoogle)
}
export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION , isUserAuthenticated)
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSucess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCESS, signInAfterSignUp)
}
export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas(){
    yield all([call(onCheckUserSession),
                call(onGoogleSignInStart),
                call(onEmailSignInStart),
                 call(onSignUpStart),
                call(onSignUpSucess),
                call(onSignOutStart)])
}