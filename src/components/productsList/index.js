import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'
import Search from './search'
import './productsList.css'

class ProductsList extends Component {
   
    render() {
        let { dataList, category = '', text = '' } = this.props,
            { ProductCollection } = dataList,
            filter = []
            

        if (text) {
            filter = ProductCollection.filter(pro => pro.Name.toLowerCase().startsWith(text))
        }else{
            filter = ProductCollection.filter(pro => pro.Category.includes(category))
        }
      
            return <div className="productsList"><Search lengthList={filter.length}/>
                <ul className="countainer" >
                    {filter.map(pro => <Product
                            key={pro.name}
                            {...pro}
                        />)
                    }</ul></div>
        }
    }


export default connect(state => ({
    dataList: state.dataList,
    category: state.categoryFilter,
    text: state.change
}), {})(ProductsList)
