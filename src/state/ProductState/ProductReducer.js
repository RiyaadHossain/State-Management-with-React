import { productAction } from "./productAction"

export const initialState = {
    fetching: false,
    error: false,
    products: [],
    cart: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case productAction.FETCHING:
            return {...state, fetching: true, error: false}
        case productAction.FETCHING_SUCCESSFUL:
            return {...state, fetching: false, products: action.payload}
        case productAction.FETCHING_FAILED:
            return {...state, error: false}
        default:
            return state
    }
}

