import { useState } from "react";
import "./products.css";
import QuantityPicker from "./quantityPicker";



const Products = (props) => {
    let moneda = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.data.price);

    let [quantity, setQuantity] = useState(1);

    const quantityChanger = (val) => {
        // console.log("Quantity changed0", val);
        setQuantity(val);
    };

    const getTotal = () => {
        let total=props.data.price * quantity;
        return total.toFixed(2);
    }
    return (

        <div className="products">
            <img src={"/images/" + props.data.img} alt={props.title} />
            <h2>{props.data.title}</h2>
            <label htmlFor="">Price: {moneda}</label>
            <label htmlFor="">Total: $ {getTotal()} </label>
            <QuantityPicker onChange={quantityChanger}></QuantityPicker>

            <button className="btn btn-outline-success btn-sm">Add</button>
        </div>


    );
}


export default Products;

/**
 * create a quantity state variable
 * when 
 */