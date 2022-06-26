import "./catalog.css";
import Products from "./products";


const Catalog = () => {
    return (
        <div className="catalog">
            <h2>This is our amazing Catalog!</h2>
            <h3>We have # products!!</h3>
            {/* display the products here */}
            <Products/>;
            <Products/>;
            <Products/>;
            <Products/>;
            <Products/>;
            <Products/>;
            <Products/>;
            <Products/>;
  
        </div>

    );

}

export default Catalog;

