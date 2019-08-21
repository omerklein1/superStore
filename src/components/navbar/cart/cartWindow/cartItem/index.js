import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../../../../actions';
import { removeFromCart } from '../../../../../actions';
import './cartItem.css'

class CartItem extends Component {
  
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
        const { name, image, price, amount, prod } = this.props;
      
        return <li className='cartItem'>
            <img src={image} alt="item"/>
            <div className="name">
                <label className="nameTitle">{name}</label>
                <span>₪{price}</span>
            </div>
            <div className="cartBtn">
                <button onClick={() => this.add(prod)}>+</button>
                <span>{amount}</span>
                <button onClick={() => this.remove(prod)}>-</button>
            </div>
        </li>
    }
}

export default connect(state => ({
    products: state.products,
    cart: state.cart
}), { addToCart, removeFromCart })(CartItem);;