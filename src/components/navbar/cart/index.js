import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart.css'

class Cart extends Component {

    render() {
        let { cart } = this.props,
        numOfProInCart = 0,
         cost = 0
         cart.forEach(e => {
             cost += e.price*e.amount
             numOfProInCart += e.amount
         });
        return <li>
<p className="cart-p1">{numOfProInCart} מוצרים</p>
<p className="cart-p2">{cost} ₪</p>
<img className="cart-img" src="img/cart.png" alt="cart" />
            </li>
    }
}

export default connect(state => ({
    cart: state.cart
}), {  })(Cart);