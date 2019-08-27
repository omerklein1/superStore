import React, { Component } from 'react'
import axios from 'axios'
import './addNewProduct.css'

class AddNewProduct extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    submit = (e) => {
        e.preventDefault()

        const { id, name, price, image, description, categoryId, subCategoryId } = this.refs

        const newProduct = {
            categoryId: categoryId.value,
            description: description.value,
            id: id.value,
            image: image.value,
            name: name.value,
            price: price.value,
            subCategoryId: subCategoryId.value
        }
        axios.put('http://localhost:1200/newProduct', newProduct).then(res => {
            console.log('submit', res.data)
            window.location.reload()
        })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        
        return <form className='addProduct' onSubmit={this.submit}>
            <label>
                <span>מספר מזהה:</span>
                <input ref='id' type='text' placeholder='מספר יחודי לכל פריט' required />
            </label>
            <label>
                <span>שם המוצר:</span>
                <input ref='name' type='text' placeholder='שם המוצר' required />
            </label>
            <label>
                <span>פרטי המוצר:</span>
                <input ref='description' type='text' placeholder='פרטי המוצר' required />
            </label>
            <label>
                <span>מחיר:</span>
                <input ref='price' type='number' placeholder='מחיר' required />
            </label>
            <label>
                <span>תמונה:</span>
                <input ref='image' type='url' placeholder='הזן כתובת תמונה' required />
            </label>
            <label>
                <span>מספר קטגוריה:</span>
                <input ref='categoryId' type='number' placeholder='מספר קטגוריה' required />
            </label>
            <label>
                <span>מספר תת קטגוריה:</span>
                <input ref='subCategoryId' type='number' placeholder='מספר תת קטגוריה' />
            </label>
            <input className="submit" type='submit' value="שלח" />
        </form>

    }
}

export default AddNewProduct