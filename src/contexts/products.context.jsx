import { createContext, useState , useEffect} from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";


export const ProductsContex = createContext({
    products : [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value ={products};

    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap()
    }, [])

    return (
        <ProductsContex.Provider value={value}>{children}</ProductsContex.Provider>
    )
}