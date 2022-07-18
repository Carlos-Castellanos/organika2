import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext} from 'react';           // react context
import StoreContext from './../context/storeContext'  // react context



const Products = (props) => {
    let moneda = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.data.price);
    let [quantity, setQuantity] = useState(1);

    let globalAddProd = useContext(StoreContext).addProduct;  // access to the global context varibles and functions, in this case only addprocduct

    const quantityChanger = (val) => {
        // console.log("Quantity changed0", val);
        setQuantity(val);
    };

    const getTotal = () => {
        let total=props.data.price * quantity;
        return total.toFixed(2);
    }

    const addProd = ( ) =>{
        console.log("adding")
        /** should be a copy of props.data plus the quantity */
        // let prod4cart= {...props.data};
        // prod4cart.quantity = quantity;
        let prod4cart= {...props.data,quantity}
        globalAddProd(prod4cart)
    }
    return (

        <div className="products">
            <img src={"/images/" + props.data.img} alt={props.title} />
            <h2>{props.data.title}</h2>
            <label htmlFor="">Price: {moneda}</label>
            <label htmlFor="">Total: $ {getTotal()} </label>
            <QuantityPicker onChange={quantityChanger}></QuantityPicker>

            <button className="btn btn-outline-success btn-sm" onClick={addProd}>Add</button>
        </div>


    );
}


export default Products;

/**
 * create a quantity state variable
 * when 
 */