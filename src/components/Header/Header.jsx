import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import useAuth from '../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth()
    return (
            <header className='header'>

                <div>
                <img className="img" src={logo} alt="" />
                </div>
                <nav>
                <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/riview">Review</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    {user.displayName ?       <NavLink to="/login" onClick={logOut}>
                        <span>{user.displayName} </span>
                        Logout</NavLink> :               <NavLink to="/register">Register</NavLink> 
                    }
                </nav>

            </header>
    );
};

export default Header;