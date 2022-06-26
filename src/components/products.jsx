import "./products.css";
import QuantityPicker from "./quantityPicker";

  
 
const Products = (props) => {
    let moneda= " "+ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(props.data.price);
    return (
        <div className="products">
            <img src={"/images/"+props.data.img} alt={props.title} />
            <h2>{props.data.title}</h2>
            <label htmlFor="">Price: {moneda}</label>
            <label htmlFor="">Total: $200.00 </label>
            <QuantityPicker></QuantityPicker>

            <button className="btn btn-outline-success btn-sm">Add</button>
        </div>
    );
}


export default Products;