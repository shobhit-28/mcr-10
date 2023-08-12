import { v4 as uuidv4 } from 'uuid';

import { types } from "./types";

export const productReducer = (state, action) => {
    const {
        ADD_NEW_PRODUCT
    } = types

    switch (action.type) {
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                products: [...state.products, {...action.payload, id: uuidv4()}]
            }
    
        default:
            return state;
    }
}