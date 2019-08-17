import React, { Component } from 'react'
import { connect } from 'react-redux'
import { categoryFilter } from '../../actions'
import './categories.css'

class Categories extends Component {

    filterCategory = (e) => { 
        console.log(e.target.id)
        this.props.categoryFilter(e.target.id)
    }

    removeDuplicates = (originalArray, prop) => {
    var newArray = [];
    var lookupObject = {};
    
    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    
    return newArray;
}

    render() {
        let { dataList } = this.props,
            { ProductCollection, ProductCollectionStats } = dataList
        const temp = [],
        categories = ProductCollectionStats.Filters[0]
        ProductCollection.filter(pro => temp.push({cat: pro.MainCategory}))
const categoriesFilter = this.removeDuplicates(temp, "cat")

        return <div className="categories"><h2>קטגוריות</h2>
        <ul className="categories-list">{
            categoriesFilter
                .map(pro => <li onClick={this.filterCategory} id={pro.cat}>{pro.cat}</li>)
        }</ul></div>
    }

}

export default connect(state => ({
    dataList: state.dataList
}), {categoryFilter})(Categories)
