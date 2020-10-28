import React from 'react';
import './SideDrawer.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                {/* <li><a href="/shop">Shop</a> </li> */}
                <li><a href="/articles">Articles</a> </li>
                <li><a href="https://try.beat81.com/shaleka/">Free Workout</a> </li>
                <li><a href="/contact">Contact</a> </li>
                <li className="social"><span><a href="https://www.instagram.com/shalekablackheaven_fitness/"><FaInstagram /></a></span></li>
                {/* <li>
                    <button className="snipcart-checkout" aria-label="shopping cart button"><span className="bag"><FaShoppingCart /></span></button>
                </li> */}
            </ul>
        </nav>
    )
};

export default sideDrawer;