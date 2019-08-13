import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'
import './productsList.css'

class productsList extends Component {

    render() {
        let { dataList } = this.props,
            { ProductCollection } = dataList

        return <ul className="countainer">{
            ProductCollection
                .map(pro => <Product
                    key={pro.name}
                    {...pro}
                />)
        }</ul>
    }

}

export default connect(state => ({
    dataList: state.dataList
}), {})(productsList)
