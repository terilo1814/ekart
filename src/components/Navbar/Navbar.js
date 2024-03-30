import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss';
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const location = useLocation();
    const products = useSelector(state => state.cart.products);


    const totalQuantity = () => {
        if (!products || products.length === 0) {
            return 0;
        }

        return products.reduce((total, item) => {
            if (item && item.quantity) {
                return total + item.quantity;
            }
            return total;
        }, 0);
    };



    const isActiveLink = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className={`item ${isActiveLink('/products/1') ? 'active' : ''}`}>
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>
                    <div className={`item ${isActiveLink('/products/2') ? 'active' : ''}`}>
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>
                </div>

                <div className='center'>
                    <Link className='link' to='/'>Ekart</Link>
                </div>

                <div className='right'>
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className='cartIcon' onClick={() => setShowCart(!showCart)}>
                            <ShoppingCartIcon />
                            <span>{totalQuantity()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {showCart && <Cart onClose={() => setShowCart(false)} />}
        </div>
    );
};
