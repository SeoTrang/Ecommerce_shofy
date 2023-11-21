import React from 'react';
import HeaderCommon from '../common/HeaderCommon/HeaderCommon';
import Footer from '../common/Footer/Footer';

const LayoutCommon = ({ children }) => {
    return (
        <div>
            <div className="app">
                <HeaderCommon/>
                {children}
                <Footer/>
            </div>
        </div>
    );
};

export default LayoutCommon;