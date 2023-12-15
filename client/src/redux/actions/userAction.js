import ProductAPI from "../../service/NodejsServerAPI/ProductAPI";
import UserAPI from "../../service/NodejsServerAPI/UserAPI"
import { FETCH_USER_DATA } from "../constant/constant";

const fetchUserData = () => {
    // const user = await UserAPI.getUser();
    // return {
    //     type: FETCH_USER_DATA,
    //     user: user
    // }
    console.log("test fetchUserData");
    return async (dispatch) => {
        try {
          // let product = await ProductAPI.GetAll();
          let count = 0;
          let user = await UserAPI.getUser();
          if(!user){
            user = await UserAPI.getUser();
          }
          dispatch({
            type: FETCH_USER_DATA,
            user: user,
          });
        } catch (error) {
          // Xử lý lỗi nếu cần thiết
          console.error("Error fetching user data:", error);
        }
    };
}

export {
    fetchUserData
}