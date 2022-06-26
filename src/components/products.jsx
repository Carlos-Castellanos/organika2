import "./products.css";
import QuantityPicker from "./quantityPicker";

const Products = () => {
    return (
        <div className="products">
            <img src="https://www.greenqueen.com.hk/wp-content/uploads/2019/08/79DDB337-9104-4282-A9E7-48846087A304.jpeg" alt="apple" />
            <h2>Title</h2>
            <label htmlFor="">Price: $300.00 </label>
            <label htmlFor="">Total: $200.00 </label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-outline-success btn-sm">Add</button>
        </div>
    );
}


export default Products;