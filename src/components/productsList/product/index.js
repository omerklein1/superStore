import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';
import './product.css'

class Product extends Component {

addCart = p => {
    console.log(p)
   const { products } = this.props
const result = products.find(prod => prod.name === p)
    this.props.addToCart(result)
}
    
    render() {
        const { name,image,price } = this.props 
        return <li className='item'>
<img className="item-img" src={image} alt="item pic"/>
<h5 className="tooltip">{name}</h5>
<span className="tooltiptext">{name}</span>
<p>₪{price}</p>
<button className="item-btn" onClick={()=>this.addCart(name)}>הוסף לסל</button>
        </li>
    }
}

export default connect(state => ({
    products: state.products,
}), {addToCart})(Product);;