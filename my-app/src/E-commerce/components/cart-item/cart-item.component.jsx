import './cart-item.styles.css'

export default function CartItem({cartItem}) {
    const{name, imageURRL, price, quantity} = cartItem;
    return(
        <div className='cart-item-container'>
            <img src={imageURRL} alt={``} />
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    );
};