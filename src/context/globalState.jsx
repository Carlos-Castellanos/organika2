import StoreContext from './storeContext';
import { useState } from 'react';


const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const myAddProduct = (product,cant) => {
        console.log('Global add prod')
        let cartLIst = [...cart];
        product.quantity=cant;
        let notExist = true;
        for(let i=0;i<cart.length;i++) {
            if(cart[i].id === product.id) {
                cart[i].quantity=cant;
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
    const myRemoveProduct = () => {};

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