import React, { Component } from 'react'
import { addToCart } from '../../../../actions';
import { removeFromCart } from '../../../../actions';
import { connect } from 'react-redux'


import './controlCart.css'

class ControlCart extends Component {
    constructor() {
        super()
        this.state = {
            numOfProduct: 1
        }
    }
    add = p => {
        console.log(this.state)
        this.setState({ numOfProduct: this.state.numOfProduct + 1 })
        this.props.addToCart(p)
    }

    remove = async p => {
        const { changeTheBtn } = this.props
        let { numOfProduct } = this.state
        await this.setState({ numOfProduct: numOfProduct - 1 })
    console.log(this.state.numOfProduct)
        if (this.state.numOfProduct === 0) {
            console.log('close the btn!')
            changeTheBtn()
        }
        this.props.removeFromCart(p)
    }

    render() {
        const { name, products } = this.props
        let { numOfProduct } = this.state
        let prod = products.find(p => p.name === name)
        return <ul className="controlCart">
            <li onClick={() => this.add(prod)}>+</li>
            <li>({numOfProduct})</li>
            <li onClick={() => this.remove(prod)}>-</li>
        </ul>
    }
}

export default connect(state => ({
    products: state.products,
}), { addToCart, removeFromCart })(ControlCart)