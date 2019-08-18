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
            filter = products.filter(pro => pro.name.toLowerCase().startsWith(text))
            console.log(text, 'text')
        } else if(id){
            filter = []
            filter = products.filter(pro => pro.categoryId === id)
            console.log(id, 'id')
        } else{
            filter = products
        }
        

        return <div className="productsList"><Search lengthList={filter.length} />
            <ul className="countainer" >
                {filter.map(pro => <Product
                    key={pro.name}
                    {...pro}
                />)
                }</ul></div>
    }
}


export default connect(state => ({
    products: state.products,
    id: state.categoryFilter,
    text: state.change
}), {})(ProductsList)
