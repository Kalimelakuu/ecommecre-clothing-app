import { createContext, useState , useEffect} from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";
import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
    categoriesMap : {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        };
        getCategoriesMap();
    },[])


    // SETTING FILE TO FIRESTORE
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // })
    const value ={categoriesMap};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}