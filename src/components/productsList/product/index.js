import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';
import ControlCart from './controlCart'
import './product.css'

class Product extends Component {
    constructor() {
        super()
        this.state = {
            cartButton: true
        }
    }

changeTheBtn = () => {
    this.setState({ cartButton: true })
}

    addCart = p => {
        const { products, } = this.props
        console.log(this.state)
        this.setState({ cartButton: false })
        const result = products.find(prod => prod.name === p)
        this.props.addToCart(result)
    }

    render() {
        const { name, image, price } = this.props;
        let { cartButton } = this.state
        return <li className='item'>
            <img className="item-img" src={image} alt="item pic" />
            <h5 className="tooltip">{name}</h5>
            <span className="tooltiptext">{name}</span>
            <p>₪{price}</p>
            <button className="item-btn" onClick={cartButton ? () => this.addCart(name) : null} >{cartButton? 'הוסף לסל' : <ControlCart  {...this.props} changeTheBtn={this.changeTheBtn}/>}</button>
        </li>
    }
}

export default connect(state => ({
    products: state.products,
    btnStatus: state.btnStatus
}), { addToCart })(Product);;