import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
function AdminSwitch({ children, ...props }) {
    const { userInfo } = useSelector((state) => state.AuthReducer);
    if (!userInfo) {
        return <Redirect to={`/admin-login`} />;
    }
    if (userInfo) {
        return <Redirect to="/admin/product" />;
    }
    return <Switch>{children}</Switch>;
}

export default AdminSwitch;
