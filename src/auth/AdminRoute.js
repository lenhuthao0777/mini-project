import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
function AdminRoute({ children, ...props }) {
    const { userInfo } = useSelector((state) => state.AuthReducer);
    if (!userInfo) {
        return <Redirect to={`/admin-login`} />;
    }
    return <Route {...props}>{children}</Route>;
}

export default AdminRoute;
