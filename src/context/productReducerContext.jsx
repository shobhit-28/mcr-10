/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";
import {inventoryData} from '../data/data'
import { productReducer } from "./productReducer";

export const ProductReducerContext = createContext();

export const ProductHandler = ({children}) => {
    const initialState = {
        products : inventoryData
    }

    const [state, dispatch] = useReducer(productReducer, initialState)

    return (
        <ProductReducerContext.Provider value={{
            products: state.products
        }}>
            {children}
        </ProductReducerContext.Provider>
    )

}