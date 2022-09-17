import {Routes, Route} from 'react-router-dom';
import Category from '../category/category.componenet';
import CategoriesPreview from '../categories-preview.component/categories-preview.component';
import './shop.style.scss'


const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={<Category/>} />
        </Routes>
        
    )
}


export default Shop;