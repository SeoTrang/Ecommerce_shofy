import { FETCH_CART_DATA } from "../constant/constant";

const initialState = {
    carts: []
};

const cartReducer = (state = initialState, action) => {
    // Xử lý các action liên quan đến language
    console.log(action);
    switch (action.type) {
        case FETCH_CART_DATA:
            return {
                carts: [...action.carts]
            }
        
        default:
            return state;
    }
};

export default cartReducer;