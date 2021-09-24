import AdminHeader from "components/AdminHeader";
import AdminSideBar from "components/AdminSideBar";
import React from "react";

const AdminLayout = ({ children }) => {
    return (
        <>
            <AdminHeader />
            <div style={{ display: "flex" }}>
                <AdminSideBar />
                {children}
            </div>
        </>
    );
};

export default AdminLayout;
