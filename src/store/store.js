// store file is where we recive actions and dispatch them 

import {compose , applyMiddleware} from 'redux';
import logger from 'redux-logger'
import { rootReducer } from './root-reducer';
import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
// LOGGER is essentially something that allows us to see 
//  what the state looks like before an action is dipatched,
// what the action is and then how the state in turn looks after the action


// MIDDLEWARE library helpers that run before an action hits the reducer


const persistConfig = {
    key:'root',
    storage,
    whitelist :['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [ process.env.NODE_ENV !== 'production' &&  logger , thunk].filter(Boolean)


const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)