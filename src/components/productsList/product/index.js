import React, { Component } from 'react'
import './product.css'

class Product extends Component {


    
    render() {
        const { name,image,price } = this.props 
        return <li className='item'>
<img className="item-img" src={image} alt="item pic"/>
<h5 className="tooltip">{name}</h5>
<span class="tooltiptext">{name}</span>
<p>₪{price}</p>
<button className="item-btn">הוסף לסל</button>
        </li>
    }
}

export default Product