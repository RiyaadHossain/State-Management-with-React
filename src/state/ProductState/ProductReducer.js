import { productAction } from "./productAction"

export const initialState = {
    fetching: false,
    error: false,
    products: [],
    carts: [],
    wishlist: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case productAction.FETCHING:
            return { ...state, fetching: true, error: false }
        case productAction.FETCHING_SUCCESSFUL:
            return { ...state, fetching: false, products: action.payload }
        case productAction.FETCHING_FAILED:
            return { ...state, fetching: false, error: true }
        case productAction.ADD_TO_CARD:
            return { ...state, carts: [...state.carts, action.payload] } // Tricky
        case productAction.REMOVE_FROM_CARD:
            const remaining = state.carts?.filter(product => product._id !== action.payload._id) // Tricky
            return { ...state, carts: remaining }
        case productAction.ADD_TO_WISHLIST:
            return { ...state, wishlist: [...state.wishlist, action.payload] }
        case productAction.REMOVE_FROM_WISHLIST:
            const remainingWish = state.wishlist?.filter(product => product._id !== action.payload._id);
            return { ...state, wishlist: remainingWish }
        default:
            return state
    }
}

