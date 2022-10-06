import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducers/reducers.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";



export const fetchCategoriesStart = ()=> {
   return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START )
}
export const fetchCategoriesSucess = (categoriesArray)=> {
   return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS , categoriesArray)
}
export const fetchCategoriesFailed = (error)=> {
   return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED , error)
}
