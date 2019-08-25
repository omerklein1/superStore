import React, { Component } from 'react'
import axios from 'axios'
import './updateProduct.css'

class UpdateProduct extends Component {

    submit = (e) => {
        e.preventDefault()
        console.log('submit')

        const { product } = this.props,
            { name, price, image } = this.refs

            const newProduct = {
                ...product,
                name: name.value,
                price: price.value,
                image: image.value
            }
            console.log(product, newProduct)
// axios.put('http://localhost:1200/products', newProduct).then(res =>{

//  window.location.reload()
// })
// .catch (err => {
//     console.log(err)
// })
    }

    render() {

        console.log('product', this.props.product)
        const { product = {} } = this.props
        return <form onSubmit={this.submit}>
            <label>
                <span>שם:</span>
                <input ref='name' defaultValue={product.name} type='text' placeholder='שם המוצר' required />
            </label>
            <label>
                <span>מחיר:</span>
                <input ref='price' defaultValue={product.price} type='number' placeholder='מחיר המוצר' required />
            </label>
            <label>
                <span>תמונה:</span>
                <input ref='image' defaultValue={product.image} type='text' placeholder='קישור לתמונה' required />
            </label>
            <input type='submit' value='שלח' />
        </form>
    }
}

export default UpdateProduct