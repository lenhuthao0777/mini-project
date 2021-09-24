import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, USER_INFO } from "constants/index";
import AuthApi from "api/AuthApi";
export function Login(values) {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            const { data } = await AuthApi.login(values);
            localStorage.setItem(USER_INFO, JSON.stringify(data));
            dispatch({ type: LOGIN_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: { error: error.response.data.message },
            });
        }
    };
}
