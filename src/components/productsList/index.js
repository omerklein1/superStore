import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'
import './productsList.css'

class ProductsList extends Component {

    render() {
        let { dataList, category='' } = this.props,
            { ProductCollection } = dataList

        return <div><div className="title"><h2>מוצרים</h2><input type="search" placeholder="חפש"></input></div><ul className="countainer">
        {ProductCollection.filter(pro => pro.Category.includes(category))
                .map(pro => <Product
                    key={pro.name}
                    {...pro}
                />)
        }</ul></div>
    }

}

export default connect(state => ({
    dataList: state.dataList,
    category: state.categoryFilter
}), {})(ProductsList)
