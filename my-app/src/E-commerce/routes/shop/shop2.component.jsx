
import ProductCard2 from '../../components/product-card/product-card.component'

import products from '../../shop-data.json'

import './shop.styles.css'

export default function Shop2() {
    
    return(
        <div className='products-container'>
            {products.map(product =>(
                <ProductCard2 key={product.id} product={product}/>
            ))}
        </div>
    )
}