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
    const { userInfo } = useSelector((state) => state.AuthReducer);
    // su ly du lieu cac o input
    const HandleLoginForm = (e) => {
        e.preventDefault();
        dispatch(Login(loginData));
    };

    const onChangeInput = (e) => {
        const newLoginData = { ...loginData };
        newLoginData[e.target.name] = e.target.value;
        setLoginData(newLoginData);
    };
    if (userInfo) {
        const { redirectTo } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if (redirectTo) {
            return <Redirect to={redirectTo} />;
        }
        return <Redirect to="/admin/product" />;
    }
    console.log(userInfo);
    return (
        <form style={{ width: "500px" }} onSubmit={HandleLoginForm}>
            <input type="text" name="email" style={{ display: "block" }} onChange={onChangeInput} />
            <input type="password" name="password" style={{ display: "block" }} onChange={onChangeInput} />
            <button style={{ display: "block" }}>Submit</button>
        </form>
    );
};

export default AdminLogin;
