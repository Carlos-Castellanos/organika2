import React from 'react';

// context describe the data and functions that will exist in the store
// this contains ionly the definition, NO IMPLEMENTACTION here

const StoreContext = React.createContext({
    cart: [],
    user: {},
    addProduct: () => { },
    removeProduct: () => { },
});

export default StoreContext;