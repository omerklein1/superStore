import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart.css'

class Cart extends Component {

    render() {
        let { cart } = this.props,
            numOfProInCart = 0,
            cost = 0
        cart.forEach(e => {
            cost += e.price * e.amount
            numOfProInCart += e.amount
        });
        return <li className="cart">
            <p className="cart-p1">{numOfProInCart} מוצרים</p>
            <p className="cart-p2">{cost} ₪</p>
            <img className="cart-img" src="img/cart.png" alt="cart" />
            <>{numOfProInCart > 0 ? <button className="buy">למעבר לתשלום =></button> : null}</>
        </li>
    }
}

export default connect(state => ({
    cart: state.cart
}), {})(Cart);