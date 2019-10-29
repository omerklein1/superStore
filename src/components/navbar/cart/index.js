import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartWindow from "./cartWindow";
import { emptyCart } from '../../../actions'
import './cart.css'

class Cart extends Component {
    constructor() {
        super()

        this.state = {
            cartOn: false
        }
    }

    render() {
        let { cart, emptyCart } = this.props,
            { cartOn } = this.state,
            numOfProInCart = 0,
            cost = 0
        cart.forEach(e => {
            cost += e.price * e.amount
            numOfProInCart += e.amount
        });
        if (cart.length === 0 && cartOn === true) { this.setState({ cartOn: false }) }
        return <>

            {numOfProInCart ? <div className="mobileCart" onClick={() => this.setState({ cartOn: !cartOn })}>
                <img className="mobileCart-img" src="img/cart.png" alt="cart" />
            </div> : null}

            <CartWindow cartOn={cartOn} />

            <li className="cart" ><div >
                <img className="cart-img" src="img/cart.png" alt="cart" />
                <div className="cart-data">
                    <p className="cart-p1">{numOfProInCart} מוצרים | </p>
                    <p className="cart-p2">{cost} ₪</p>
                </div>

                <>{numOfProInCart > 0 ? <><button className="buy" onClick={() => this.setState({ cartOn: !cartOn })}>{cartOn ? 'הסתר עגלה =>' : 'הצג עגלה =>'}</button><button className="buy" onClick={() => emptyCart()}>רוקן עגלה</button></> : null}</>
            </div></li>
        </>
    }
}

export default connect(state => ({
    cart: state.cart
}), { emptyCart })(Cart);