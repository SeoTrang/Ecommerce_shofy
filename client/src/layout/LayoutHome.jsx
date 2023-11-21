import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

const LayoutHome = ({ children }) => {
    return (
        <>
            <div className="app">
                <Header/>
                {children}
                <Footer/>
            </div>
        </>
    );
};

export default LayoutHome;