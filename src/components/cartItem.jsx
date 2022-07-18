import { useContext } from 'react';           // react context
import StoreContext from './../context/storeContext'  // react context
import "./cartItem.css";

const CartItem = (prod) => {
    // access to the global context varibles and functions
    let globalRemoveProd = useContext(StoreContext).removeProduct;

    const removeProd = () => {
        console.log("removing")
        globalRemoveProd(prod.data.id)
    }





    const getTotal = () => {
        let money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(prod.data.quantity * prod.data.price);
        return money;
        // let money =prod.data.quantity * prod.data.price;
        //return money.toFixed(2);
    }

    return (
        <div className='ppal'>
            <div className="cart-container">
                <div className="images">
                    <img src={"/images/" + prod.data.img} alt={prod.data.title} />
                </div>
                <div className="info">
                    <h2>{prod.data.title}</h2>
                    <h3>{prod.data.category}</h3>
                </div>
                <div className="col-data">
                    <h4>Price</h4>
                    <label>${prod.data.price} </label>
                </div>
                <div className="col-data">
                    <h4>Quantity</h4>
                    <label>$ {prod.data.quantity} </label>
                </div>
                <div className="col-data">
                    <h4>Total</h4>
                    <label>{getTotal()}</label>
                </div>

                <div className="btn">
                    <button className="btn btn-danger btn-sm" onClick={removeProd}>Remove</button>
                </div>
            </div>
        </div>


    )
}

export default CartItem;