import UserAPI from "../../service/NodejsServerAPI/UserAPI"
import { FETCH_USER_DATA } from "../constant/constant";

const fetchUserData = () => {
    // const user = await UserAPI.getUser();
    // return {
    //     type: FETCH_USER_DATA,
    //     user: user
    // }
    return async (dispatch) => {
        try {
          const user = await UserAPI.getUser();
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