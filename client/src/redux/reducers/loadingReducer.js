import { START_LOADING, STOP_LOADING } from "../constant/constant";

const initialState = {
    loading: false,
};

const loadingReducer = (state = initialState, action) => {
    // Xử lý các action liên quan đến language
    console.log(action);
    switch (action.type) {
        case START_LOADING:
            return {
                loading:true
            }
        case STOP_LOADING:
            return {
                loading:false
            }
        default:
            return state;
    }
};

export default loadingReducer;