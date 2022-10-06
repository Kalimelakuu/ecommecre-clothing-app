import {Routes, Route} from 'react-router-dom';
import Category from '../category/category.componenet';
import CategoriesPreview from '../categories-preview.component/categories-preview.component';
import './shop.style.scss'
import {  useEffect} from "react";
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import {useDispatch} from 'react-redux'



const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            dispatch(fetchCategoriesStart())
        };
        getCategoriesMap();
    },[])

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={<Category/>} />
        </Routes>
        
    )
}


export default Shop;