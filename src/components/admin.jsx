import { useEffect, useState } from 'react';
import './admin.css'
import DataService from "../services/dataServices";

const Admin = () => {
    // create a empty object 
    const [coupon, setCoupon] = useState({});
    const [product, setProduct] = useState({
        id: '0',
        title: '',
        price: '',
        img: '',
        stock: '',
        category: ''
    });  //title, price, image, category,
    const [errorMsg, setErrorMsg] = useState('');
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    /**
     * 
     * {
     * code: "qwerty",
     * diconunt:123} 
     */

    // handler for changes in the form coupon. 
    const handleCouponChange = (e) => {
        let name = e.target.name;   // take the name of input element in the form
        let value = e.target.value; // take the value of input element in the 
        let copy = { ...coupon };     // create a copy of each element in the objet
        copy[name] = value;         // modify the copy 

        if (name === "discount") {
            if (value === '' || parseInt(value) === +value) {
                copy[name] = value;
            }
        }
        else {
            copy[name] = value;
        }
        setCoupon(copy)             // set the coupon back

    }

    const loadCoupon = async () => {
        let services = new DataService();
        let data = await services.getCoupons();   //return array of catalog instances
        setAllCoupons(data);
    }
    useEffect(() => {
        loadCoupon();
    }, []);

    // send the coupon information to the console
    // create a copy of coupon obj
    // set the discount to be a number
    // console log a copy
    const saveCoupon = () => {
        console.log("==>" + coupon.code + " " + coupon.discount);
        console.log(coupon);
        let copy = { ...coupon };
        // copy.discount = parseFloat(coupon.discount);
        // copy.discount = coupon.discount*1;
        copy.discount = +coupon.discount;
        console.log(copy);
        // add a coupon in the coupons array
        let copyCoupons = [...allCoupons]  // create a copy of all coupons
        copyCoupons.push(copy);            //add a new elemente in the copy
        setAllCoupons(copyCoupons);        // Copy a new list in "copyCoupons"
        //send to the collection in the data base organika
        let services = new DataService();
        services.saveCoupon(copy);
        //loadCoupon()

    }

    // handler for changes in the form coupon. 
    const handleProductChange = (e) => {
        let name = e.target.name;   // take the name of input element in the form
        let value = e.target.value; // take the value of input element in the 
        let copy = { ...product };     // create a copy of each element in the objet
        copy[name] = value;         // modify the copy 
        //setProduct(copy)             // set the coupon back
        copy["id"] = 0; //
        switch (name) {
            case 'stock':
                if (value === '' || parseInt(value) === +value) {
                    copy[name] = value;
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    copy[name] = value;
                }
                break;
            default:
                copy[name] = value;
        }
        setProduct(copy)             // set the coupon back
    };

    // send the coupon information to the console
    const saveProduct = () => {
        console.log(product);
        let errorMsg = '';
        let values = [
            product.title,
            product.price,
            product.stock,
            product.img,
            product.category
        ]



        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            let copy = { ...product };
            copy.price = parseFloat(product.price);
            copy.stock = +product.stock;
            console.log(copy);
            // add a products in the products array
            let copyProducts = [...allProducts]  // create a copy of all coupons
            copyProducts.push(copy);            //add a new elemente in the copy
            setAllProducts(copyProducts);        // Copy a new list in "copyCoupons"
            console.log(allProducts)
            //todo save copy on server side
            let services = new DataService();
            services.saveProduct(copy);

        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);


    }


    return (
        <div className='admin-page'>
            <h1 className="title">Store Administration</h1>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <div className="parent">
                <section className="products">
                    <div className="form">
                        {/* //title, price, image, category, */}
                        <div className="my-control" >
                            <label>Name</label>
                            <input className="form-control" onChange={handleProductChange} type="text" name="title" placeholder="Product Title" />
                        </div>
                        <div className="my-control">
                            <label>Price</label>
                            <input
                                className="form-control"
                                type="number"
                                name="price"
                                onChange={handleProductChange}
                                placeholder="Price"

                            />
                        </div>
                        <div className="my-control" id="image">
                            <label>image</label>
                            <input
                                className="form-control"
                                type="text"
                                name="img"
                                onChange={handleProductChange}
                                placeholder="text"
                            />
                        </div>
                        <div className="my-control" >
                            <label>stock</label>
                            <input
                                className="form-control"
                                type="number"
                                name="stock"
                                onChange={handleProductChange}
                                placeholder="Stock"
                            />
                        </div>

                        <div className="my-control" >
                            <label>category</label>
                            <select
                                className="form-select"
                                type="text"
                                name="category"
                                onChange={handleProductChange}
                                placeholder="Category"
                                aria-label="Default select example">
                                <option selected hidden >Open this select menu</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Veggies">Veggies</option>
                                <option value="Vitamins">Vitamins</option>
                            </select>
                        </div>
                        <button variant="primary" type="submit" className="btn btn-primary" onClick={saveProduct}>
                            Add Product
                        </button>
                    </div>

                    <div className="Products-list">
                        <h3>List Productos</h3>
                        <ul>
                            {allProducts.map((prod, index) => <li key={index}> {prod.title} - ${prod.price}</li>)}
                        </ul>
                    </div>
                </section>
                <section className="coupons">
                    <h3>Coupon codes</h3>
                    <div className="form">
                        <div className="my-control">
                            <label>Code</label>
                            <input
                                className="form-control"
                                type="text"
                                name="code"
                                onChange={handleCouponChange}
                                placeholder="code"
                            />
                        </div>
                        <div className="my-control">
                            <label>Discount</label>
                            <input
                                className="form-control"
                                type="number"
                                name="discount"
                                onChange={handleCouponChange}
                                placeholder="discount"
                            />
                        </div>
                        <button variant="primary" type="submit" className="btn btn-primary" onClick={saveCoupon}>
                            Save coupon
                        </button>
                    </div>
                    <div className="coupons-list">
                        <h3>List coupons</h3>
                        <ul>
                            {allCoupons.map((coupon, index) => <li key={index}> {coupon.code} - {coupon.discount} %off</li>)}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Admin;