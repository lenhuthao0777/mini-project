import { Login } from "actions/AuthActions";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import qs from "qs";
import { Redirect, useLocation } from "react-router";
const AdminLogin = () => {
    const [loginData, setLoginData] = useState({
        taiKhoan: "",
        matKhau: "",
    });
    const dispatch = useDispatch();
    const location = useLocation();
    const { userInfo, error } = useSelector((state) => state.AuthReducer);
    console.log(error);
    // Submit form
    const HandleLoginForm = (e) => {
        e.preventDefault();
        dispatch(Login(loginData));
    };

    // Sử lý dữ liệu các ô input
    const onChangeInput = (e) => {
        const newLoginData = { ...loginData };
        newLoginData[e.target.name] = e.target.value;
        setLoginData(newLoginData);
    };

    // Khi đăng nhập thành công chuyển qua trang admin products
    if (userInfo) {
        const { redirectTo } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if (redirectTo) {
            return <Redirect to={redirectTo} />;
        }
        return <Redirect to="/admin/products" />;
    }
    return (
        <form style={{ width: "500px" }} onSubmit={HandleLoginForm}>
            <input type="text" name="email" style={{ display: "block" }} onChange={onChangeInput} />
            <input type="text" name="password" style={{ display: "block" }} onChange={onChangeInput} />
            <button style={{ display: "block" }}>Submit</button>
        </form>
    );
};

export default AdminLogin;
