/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";
import {inventoryData} from '../data/data'
import { productReducer } from "./productReducer";
import { types } from "./types";

export const ProductReducerContext = createContext();

export const ProductHandler = ({children}) => {
    const initialState = {
        products : inventoryData
    }

    const {
        ADD_NEW_PRODUCT
    } = types

    const [state, dispatch] = useReducer(productReducer, initialState)

    const addNewProduct = (product) => {
        dispatch({type: ADD_NEW_PRODUCT, payload: product})
    }

    return (
        <ProductReducerContext.Provider value={{
            products: state.products,
            addNewProduct
        }}>
            {children}
        </ProductReducerContext.Provider>
    )

}