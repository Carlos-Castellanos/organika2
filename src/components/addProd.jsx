import './addProd.css'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// id:10,
// img: "onion.jpg",


const AddProd = () => {
    console.log("Admin");

    const [product, setproduct] = useState({
        producttitle:  '',
        price: '',
        stock:  '',
        discount: '',
        category:  ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { producttitle, price, stock, discount, category } = product;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [producttitle, price, stock, discount, category];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const product = {
                id: uuidv4(),
                producttitle,
                price,
                stock,
                discount,
                category
            };
            console.log("New product:");
            console.log(product);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'discount':
                if (value === '' || parseInt(value) === +value) {
                    setproduct((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'stock':
                if (value === '' || parseInt(value) === +value) {
                    setproduct((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setproduct((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setproduct((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
             <form onSubmit={handleOnSubmit}> 
                <div className="mb-3" id="name">
                    <label>product Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="producttitle"
                        value={producttitle}
                        placeholder="Product Title"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3" id="price">
                    <label>product Price</label>
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Price"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3" id="stock">
                    <label>product stock</label>
                    <input
                        className="form-control"
                        type="text"
                        name="stock"
                        value={stock}
                        placeholder="Stock"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3" id="discount">
                    <label>discount</label>
                    <input
                        className="form-control"
                        type="number"
                        name="discount"
                        value={discount}
                        placeholder="Discount"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3" id="category">
                    <label>product category</label>
                    <select 
                        className="form-select" 
                        type="text"
                        name="category"
                        value={category}
                        placeholder="Category"
                        onChange={handleInputChange} 
                        aria-label="Default select example">
                        <option selected hidden >Open this select menu</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Veggies">Veggies</option>
                        <option value="Vitamins">Vitamins</option>
                    </select>
                </div>
                <button variant="primary" type="submit" className="submit-btn">
                    Add
                </button>
                
            </form>
        </div>
    );
};

export default AddProd;





