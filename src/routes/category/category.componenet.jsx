import { useParams} from 'react-router-dom'
import './category.styles.scss'
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../Component/product-card/product-card.component';

const Category = () => {
    const { category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return(
        <Fragment>
        <h1 className='category-title'>{category.toUpperCase()}</h1>
        <div className='category-container'>
            { products &&
            products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        </Fragment>
    )
}

export default Category