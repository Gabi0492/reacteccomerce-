import React, { useContext } from "react";

export const Navbar = () => {
    return (
        <nav>
            StyleShop
            <ul className="nav-list">
                <li>
                    Cart items:<span className="cart-count">0</span>
                </li>

            </ul>
        </nav>
    );
};