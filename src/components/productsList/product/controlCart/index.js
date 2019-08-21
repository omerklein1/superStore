import React, { Component } from 'react'
import { addToCart } from '../../../../actions';
import { removeFromCart } from '../../../../actions';
import { connect } from 'react-redux'
import './controlCart.css'

class ControlCart extends Component {
   
    add = p => {
        console.log(this.state)
        this.props.addToCart(p)
    }

    remove = async p => {
        const { changeTheBtn, cart, id } = this.props
        let numOfProduct = cart.find(p => p.id === id).amount
   
        if (numOfProduct === 0) {
            console.log('close the btn!')
            changeTheBtn()
        }
        this.props.removeFromCart(p)
    }

    render() {
        const {  products, id, cart, changeTheBtn } = this.props
        // let { numOfProduct } = this.state
let numOfProduct = cart.find(p => p.id === id)
        let prod = products.find(p => p.id === id)
        if(!numOfProduct){changeTheBtn()}
        return <ul className="controlCart">
            <li onClick={() => this.add(prod)}>+</li>
            <li>({numOfProduct? numOfProduct.amount : null})</li>
            <li onClick={() => this.remove(prod)}>-</li>
        </ul>
    }
}

export default connect(state => ({
    products: state.products,
    cart: state.cart
}), { addToCart, removeFromCart })(ControlCart)