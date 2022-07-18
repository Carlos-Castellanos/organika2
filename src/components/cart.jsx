/*
Create Card page
display a simple h1 for now
use the search button to navigate to it (text should be: View Cart)
remove the search box from the navbar
*/
import { useContext } from 'react';
import StoreContext from '../context/storeContext';

import './cart.css'
import CartItem from './cartItem';

const Cart = () => {
    const globalCart = useContext(StoreContext).cart;
    const getCount = () => {
        let count = 0;
        for (let i = 0; i < globalCart.length; i++) {
            count += globalCart[i].quantity;
        }
        return count;
    }
    const bigTotal = () => {
        let total = 0;
        for (let i = 0; i < globalCart.length; i++) {
            total += globalCart[i].quantity * globalCart[i].price;
        }
        let money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
        return money;
    }

    return (
        <div className="cart-page">
            <h1>My Cart</h1>
            <h5>There are {getCount()} products</h5>
            {/* map the cart into li that display the title, quantity and price*/}
            <div className="container">
            <section className="list">
            {globalCart.map((prod, index) =>
            <CartItem id={index} data={prod}></CartItem>)};
            </section>
            <section className="infox">
                <h5> Total to pay</h5>
                <h3>{bigTotal()}</h3>
            </section>

            </div>




        </div>
    )

};

export default Cart;