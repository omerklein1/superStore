import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {

    render() {
        return <ul className='navbar'>
            <li className="user">
                <img className="img-user" src="img/omer_klein.png" alt="user pic" />
                <p>שלום שם משתמש<select>
                    <option></option><option>התנתק</option>
                    </select></p>
            </li>

            <li>
                <h1>החנות של עומר</h1>
            </li>

            <li>
<p className="cart-p1">5 מוצרים</p>
<p className="cart-p2">325 ש"ח</p>
<img className="cart-img" src="img/cart.png" alt="cart" />
            </li>
        </ul>
    }
}

export default Navbar