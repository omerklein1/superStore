import React, { Component } from 'react'
import './product.css'

class Product extends Component {

    render() {
        const { Name,ProductPicUrl,Price } = this.props 
        return <li className='item'>
<img className="item-img" src={ProductPicUrl} alt="item pic"/>
<h5 className="tooltip">{Name}</h5>
<span class="tooltiptext">{Name}</span>
<p>{Price}$</p>
<button className="item-btn">הוסף לסל</button>
        </li>
    }
}

export default Product