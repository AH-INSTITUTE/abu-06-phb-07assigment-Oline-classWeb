import React from 'react';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className="container" style={{borderRight: '1px solid #fff',borderLeft: '1px solid #fff'}}>
            <Navbar />
        </div>
    );
};

export default Header;