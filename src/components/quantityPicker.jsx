import { useState } from 'react';
import "./quantityPicker.css";



const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity(quantity + 1);

    }

    const handleDecrease = () => {
         if (quantity > 1) {
            setQuantity(quantity - 1);
        }

    }

    
    return(
        <div className="quantityPicker">
            <button className="btn btn-danger btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-dark btn-sm" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;