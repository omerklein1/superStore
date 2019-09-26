import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './cartItem'
import './cartWindow.css'

class CartWindow extends Component {


    render() {
        let { cartOn, cart } = this.props,
            numOfProInCart = 0,
            cost = 0
        cart.forEach(e => {
            cost += e.price * e.amount
            numOfProInCart += e.amount
        });
        return <div className={`cartWindow ${cartOn ? ' cartOpen' : ''} `}>
            <h2 className='cartTitle'>העגלה שלי({numOfProInCart})</h2>
            {cart.map(p => <CartItem {...p} prod={p} />)}
            <h3>סה"כ {cost} ₪</h3>
        </div>
    }

}

export default connect(state => ({
    cart: state.cart,
}), {})(CartWindow)
