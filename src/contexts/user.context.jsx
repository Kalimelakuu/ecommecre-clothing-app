import { createContext , useState ,useEffect,useReducer} from "react";
import { onAuthStateChangedListner,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser :() => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const userReducer =  (state, action) => {
    console.log('dispatched')
    console.log(action)
    const {type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser : payload
            }
        default:
            throw new Error(`Unhandled type ${type} in user reducer`)

    }
}

const Initital_State = {
     currentUser : null
}

export const UserProvider = ({children}) =>{

    //const [currentUser , setCurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, Initital_State)
    console.log(currentUser)
    const setCurrentUser = (user)=> {
        dispatch({type : USER_ACTION_TYPES.SET_CURRENT_USER , payload : user})
    }
    const value = {currentUser , setCurrentUser};

   

    useEffect(() => {

        const unsubscribe = onAuthStateChangedListner((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
         
        });
            return unsubscribe;
    
        },[])
    return <UserContext.Provider value={value}> {children}</UserContext.Provider>
    }