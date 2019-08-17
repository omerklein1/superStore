import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {

    render() {
        let numOfProInCart, cost
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
<p className="cart-p1">{numOfProInCart || 0} מוצרים</p>
<p className="cart-p2">{cost || 0} ₪</p>
<img className="cart-img" src="img/cart.png" alt="cart" />
            </li>
        </ul>
    }
}

export default Navbar