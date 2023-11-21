import CartAPI from "../../service/NodejsServerAPI/CartAPI"
import { FETCH_CART_DATA } from "../constant/constant";

const fetchCartData = async () => {
    const carts = await CartAPI.getCartByUser();
    return {
        type: FETCH_CART_DATA,
        carts: carts
    }
}

const addToCart = async (id,quantity) => {
    const result = await CartAPI.addToCart();
    return result;
}

const removeFromCart = async (id) => {
    const result = await CartAPI.removeFromCart();
    return result;
}   

export{
    fetchCartData,
    addToCart,
    removeFromCart
}