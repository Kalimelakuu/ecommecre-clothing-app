import CategoryPreview from '../../Component/category-preview/category-preview.component'
import './categories-preview.styles.scss';
import { selectCategoriesMap,selectIsLoading } from '../../store/categories/categories.selector'
import {useSelector} from 'react-redux'
import Spinner from './../../Component/spinner/spinner.component';
import { Fragment } from 'react';


const CategoriesPreview = () => {

    const isLoading = useSelector(selectIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap);
    return (
        <Fragment>
        
        {isLoading ?  <Spinner/>:
            Object.keys(categoriesMap).map((title) =>{
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>})}
        </Fragment>
            )
}


export default CategoriesPreview;