import CartAPI from "../../service/NodejsServerAPI/CartAPI"
import { FETCH_CART_DATA } from "../constant/constant";

const fetchCartData = () => {
    return async(dispatch) => {
        try {
            let carts = await CartAPI.getCartByUser();
            if(!carts){
                carts = await CartAPI.getCartByUser();
            }
            dispatch({
                type: FETCH_CART_DATA,
                carts: carts
            });
        } catch (error) {
            console.log(error);
        }
    }
}

const addToCart = (id,data) => {
    return async() => {
        try {
            const result = await CartAPI.addToCart(id,data);
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
        }
    }
    // const result = await CartAPI.addToCart();
    // return result;
}

const updateCart =  (id,data) => {
    return async() => {
        try {
            const result = await CartAPI.updateCart(id,data);
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
        }
    }
    // const result = await CartAPI.addToCart();
    // return result;
}

const removeFromCart = (id) => {
    return async() => {
        try {
            const result = await CartAPI.removeFromCart(id);
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
        }
    }
}   

export{
    fetchCartData,
    addToCart,
    removeFromCart,
    updateCart
}