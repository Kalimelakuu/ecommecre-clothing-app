import { useContext, Fragment } from 'react';
import ProductCard from '../../Component/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './shop.style.scss';

const Shop = () => {

    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
           {
            Object.keys(categoriesMap).map((title) => 
                (<Fragment key={title}>
                   <h1>{title}</h1>
                   <div className='products-container'>
                        {categoriesMap[title].map((product) =>(
                                <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
                </Fragment>)
            )
           }
        
        </Fragment>
    )
}


export default Shop;