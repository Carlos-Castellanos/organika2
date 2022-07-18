import { useState, useContext } from 'react';           // react context
import StoreContext from './../context/storeContext'  // react context
import "./products.css";

const CartItem = () => {
    // access to the global context varibles and functions
    let globalRemoveProd = useContext(StoreContext).removeProduct;
    let globalCart = useContext(StoreContext).cart;
    const [total,setTotal] = useState(0)
    const removeProd = (product) => {
        globalRemoveProd();
    }
    const calcTotal = (totProd) => {
        console.log(totProd)
        let tot=total+totProd;
        setTotal(tot)
    }

    return (
        <div className='products'>
            <h3>Total {total}</h3>
            {globalCart.map((prod, index) =>
            <div className="products" key={index + 1} onChange={calcTotal}>
                 <img src={"/images/" + prod.img} alt={prod.title} />
                 <h2>{prod.title}</h2>
                 <label htmlFor="">Price: ${prod.price}</label>
                 <label htmlFor="">Quantity: $ {prod.quantity} </label>
                 <label htmlFor="">Total: $ {prod.quantity*prod.price} </label>
                 <button className="btn btn-outline-success btn-sm" onClick={removeProd}>Remove</button>
             </div> 
             )}
        </div>


    )
}

export default CartItem;