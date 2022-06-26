import "./quantityPicker.css";

const QuantityPicker = () => {
    return(
        <div className="quantityPicker">
            <button className="btn btn-danger btn-sm">-</button>
            <label>#</label>
            <button className="btn btn-dark btn-sm">+</button>
        </div>
    );
}

export default QuantityPicker;