import { FETCH_USER_DATA } from "../constant/constant";

const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_USER_DATA:
            return {
                user:action.user
            }
        default:
            return state;
    }
};

export default userReducer;