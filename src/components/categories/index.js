import React, { Component } from 'react'
import { connect } from 'react-redux'
import { categoryFilter } from '../../actions'
import './categories.css'

class Categories extends Component {

    filterCategory = (e) => { 
        console.log(e.target.id)
        this.props.categoryFilter(e.target.id)
    }

    render() {
        let { dataList } = this.props,
            { ProductCollection, ProductCollectionStats } = dataList
        const temp = [],
        categories = ProductCollectionStats.Filters[0]
        ProductCollection.filter(pro => temp.push(pro.Category))
console.log(temp);
const categoriesFilter = new Set(temp)
console.log(categoriesFilter);
        return <div className="categories"><h2>קטגוריות</h2>
        <ul className="categories-list">{
            categories.values
                .map(pro => <li onClick={this.filterCategory} id={pro.text}>{pro.text}</li>)
        }</ul></div>
    }

}

export default connect(state => ({
    dataList: state.dataList
}), {categoryFilter})(Categories)
