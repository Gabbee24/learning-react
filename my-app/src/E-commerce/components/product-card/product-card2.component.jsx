import './product-card.styles.css'
import Button from '../button/button.component'

export default function ProductCard2({product}){
    const {name, price, imageUrl} = product;
    
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    );
};