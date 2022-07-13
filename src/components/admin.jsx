import { useState } from 'react';
import './admin.css'

const Admin = () => {
    // create a empty object 
    const [coupon, setCoupon] = useState({});
    const [product, setProduct] = useState({
        title: '',
        price: '',
        image: '',
        stock: '',
        category: ''
    });  //title, price, image, category,
    const [errorMsg, setErrorMsg] = useState('');
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

    // send the coupon information to the console
    const saveCoupon = () => {
        console.log("==>" + coupon.code + " " + coupon.discount);
        console.log(coupon);
        // create a copy of coupon obj
        // set the discount to be a number
        // console log a copy
        let copy = { ...coupon };
        // copy.discount = parseFloat(coupon.discount);
        // copy.discount = coupon.discount*1;
        copy.discount = +coupon.discount;
        console.log(copy);
    }

    // handler for changes in the form coupon. 
    const handleProductChange = (e) => {
        let name = e.target.name;   // take the name of input element in the form
        let value = e.target.value; // take the value of input element in the 
        let copy = { ...product };     // create a copy of each element in the objet
        copy[name] = value;         // modify the copy 
        //setProduct(copy)             // set the coupon back

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
            product.image,
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
                                name="image"
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
                </section>
            </div>
        </div>
    )
}

export default Admin;