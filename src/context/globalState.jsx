import StoreContext from './storeContext';
import { useState } from 'react';


const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const myAddProduct = (product,cant) => {
        console.log('Global add prod')
        let cartLIst = [...cart];
        // product.quantity=cant;
        let notExist = true;
        for(let i=0;i<cart.length;i++) {
            if(cart[i].id === product.id) {
                cart[i].quantity=product.quantity;
                notExist = false;
            }
        }
        if (notExist) {
        cartLIst.push(product)
        }

        setCart(cartLIst);
        console.log(cartLIst);
        console.log(cart)
    };
    const myRemoveProduct = (myId) => {

        console.log('Global add prod: '+ myId)
        //this code is funcionality for myId is the position of the products list array
        // let cartLIst = [...cart];
        // cartLIst.splice(myId, 1);
        // setCart(cartLIst);

        //This code is funcionality for myId is the product id
        let copyCart =cart.filter(prod => prod.id !== myId);
        setCart(copyCart);
    };

    return (
        // the left part is Public, the right part is Private
        <StoreContext.Provider
            value={{
                cart: cart,
                user: user,
                addProduct: myAddProduct,
                removeProduct: myRemoveProduct,
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};


export default GlobalState;