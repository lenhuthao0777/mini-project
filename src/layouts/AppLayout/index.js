import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default AppLayout;
