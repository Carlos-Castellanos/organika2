
import { useEffect, useState } from "react";
import DataService from "../services/dataServices";
import "./catalog.css";
import Products from "./products";


const Catalog = () => {
    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        let services = new DataService();
        let data = services.getCatalog();   //return array of catalog instances
        setProducts(data);
    }

    useEffect(() => loadCatalog(), []);


    return (
        <div className="catalog">
            <h2>This is our amazing Catalog!</h2>
            <h3>We have {products.length} products!!</h3>
            <div className="catalog-container">
                {products.map((item) => {
                    return (
                        <Products key={item.id} data={item} />
                    );
                })}
            </div>
        </div>
    );

}

export default Catalog;

