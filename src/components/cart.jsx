/*
Create Card page
display a simple h1 for now
use the search button to navigate to it (text should be: View Cart)
remove the search box from the navbar
*/
import './cart.css'
import {Link} from 'react-router-dom'


const Cart = () => {
    return (
        <div className="cart-page">
            <h1>My Cart</h1>
            <Link className="btn btn-primary" to="/catalog">Next</Link>
        </div>
    )

};

export default Cart;