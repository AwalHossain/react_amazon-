import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
            <header className='header'>

                <div>
                <img className="img" src={logo} alt="" />
                </div>
                <nav>
                    <a href="/shop">Shopt</a>
                    <a href="/order">Order Review</a>
                    <a href="/mange"> Manage Inverntory here</a>
                </nav>

            </header>
    );
};

export default Header;