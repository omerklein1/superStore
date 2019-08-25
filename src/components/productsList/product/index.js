import React, { Component } from 'react'
import { connect } from 'react-redux';
import Modal from '../../modal'
import { addToCart } from '../../../actions';
import ControlCart from './controlCart'
import UpdatProduct from './updateProduct'
import './product.css'

class Product extends Component {
    constructor() {
        super()
        this.state = {
            cartButton: true,
            updateMode: ''
        }
    }

    changeTheBtn = () => {
        this.setState({ cartButton: true })
    }

    addCart = p => {
        const { products } = this.props
        console.log(this.state)
        this.setState({ cartButton: false })
        const result = products.find(prod => prod.name === p)
        this.props.addToCart(result)
    }

    edit = product => {
        this.setState({ updateMode: product })
    }

    render() {
        const { name, image, price, admin, product } = this.props;
        let { cartButton, updateMode } = this.state
        
        return <>
            <Modal open={updateMode} title={`עריכת מוצר: ${name}`}>
                <UpdatProduct product={product}/>
            </Modal>
            <li className='item'>
                <img className="item-img" src={image} alt="item pic" />
                <h5 className="tooltip">{name}</h5>
                <span className="tooltiptext">{name}</span>
                <p>₪{price}</p>
                {admin ? <button className="item-btn" onClick={() => this.edit({ product })}>עריכה</button> : <button className="item-btn" onClick={cartButton ? () => this.addCart(name) : null} >{cartButton ? 'הוסף לסל' : <ControlCart  {...this.props} changeTheBtn={this.changeTheBtn} />}</button>}
            </li>
        </>
    }
}

export default connect(state => ({
    products: state.products,
    btnStatus: state.btnStatus,
    admin: state.admin
}), { addToCart })(Product);;