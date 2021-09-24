import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USER_INFO } from "constants/index";
const userInfo = localStorage.getItem(USER_INFO) ? JSON.parse(localStorage.getItem(USER_INFO)) : null;
const initialState = {
    userInfo,
    isLoading: false,
    error: null,
};
export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload.data,
            };
        }
        case LOGIN_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
