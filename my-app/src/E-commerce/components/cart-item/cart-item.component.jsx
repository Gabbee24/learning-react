import './cart-item.styles.css'

export default function CartItem({cartItem}) {
    const{name, imageURRL, price, quantity} = cartItem;
    return(
        <div className='cart-item-container'>
            <img src={imageURRL} alt={`${name}`} />
            <div className="item-details">
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
};