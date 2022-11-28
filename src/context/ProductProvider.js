import React, { createContext, useEffect, useReducer, useContext } from "react";
import { productAction } from "../state/ProductState/productAction";
import { initialState, reducer } from "../state/ProductState/ProductReducer";

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: productAction.FETCHING })
        fetch("/products.json")
            .then(res => res.json())
            .then(data => dispatch({ type: productAction.FETCHING_SUCCESSFUL, payload: data }))
            .catch(() => dispatch({ type: productAction.FETCHING_FAILED }))
    }, [])

    const value = {state, dispatch}

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context
}

export default ProductProvider;

