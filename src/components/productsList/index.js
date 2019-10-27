import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'
import Search from './search'
import './productsList.css'

class ProductsList extends Component {



    render() {
        let { products, id = '', text = '' } = this.props,
            filter

        if (text) {
            filter = products.filter(pro => pro.name.toLowerCase().includes(text))
            console.log(text, 'text')
        } else if (id) {
            filter = []
            filter = products.filter(pro => pro.categoryId === id)
            console.log(id, 'id')
        } else {
            filter = products
        }


        return <>
            <Search lengthList={filter.length} />
            <div className="productsList">
                <ul className="countainer" >
                    {filter.map(pro => <Product
                        product={pro}
                        {...pro}
                    />)
                    }
                    <li className="try"> - </li>
                </ul>
            </div>
        </>
    }
}


export default connect(state => ({
    products: state.products,
    id: state.categoryFilter,
    text: state.change
}), {})(ProductsList)
