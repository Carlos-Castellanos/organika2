import { useState } from 'react';
import "./quantityPicker.css";



const QuantityPicker = (props) => {
    let [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        let newVal = quantity + 1;   // to protect values on the timeline
        setQuantity(newVal);
        props.onChange(newVal);  //call the functionon the parent
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            let newVal = quantity - 1;
            setQuantity(newVal);
            props.onChange(newVal);
        }

    }


    return (
        <div className="quantityPicker">
            <button className="btn btn-danger btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-dark btn-sm" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;


