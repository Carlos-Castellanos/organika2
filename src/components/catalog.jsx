import { useEffect, useState } from "react";
import DataService from "../services/dataServices";
import "./catalog.css";
import Products from "./products";


const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadCatalog = async () => {
        let services = new DataService();
        let data = await services.getCatalog();   //return array of catalog instances
        console.log("load Catalog");
        console.log(data);

        setProducts(data);
    }

    useEffect(() => {
        loadCatalog();
    }, []);


    return (
        <div className="catalog">
            <h2>This is our amazing Catalog!</h2>
            <h3>We have {products.length} products!!</h3>
            <div className="catalog-container">
                {/* {products.map((item) => {
                    return (
                        <Products key={item.id} data={item} />
                    );
                })} */}

                {products.map(item =>

                    <Products key={item.id} data={item} />

                )}
            </div>
        </div>
    );

}

export default Catalog;
