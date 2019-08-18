import React, { Component } from 'react'
import { connect } from 'react-redux'
import { categoryFilter } from '../../actions'
import { gatCategoriesList } from '../../actions'
import './categories.css'

class Categories extends Component {

    componentDidMount() {
        this.props.gatCategoriesList()
    }

    filterCategory = (id) => {
        console.log(id)
        this.props.categoryFilter(id)
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
        let { categories } = this.props
        // { ProductCollection } = dataList
        // const { products } = this.state
                // const temp = []
                // categories.filter(pro => temp.push({cat: pro.name, id: pro.id}))
        // const categoriesFilter = this.removeDuplicates(temp, "cat")

        return <div className="categories"><h2>קטגוריות</h2>
            <ul className="categories-list"><li onClick={()=>this.filterCategory('')}>All</li>
                {categories.map(prod => <li onClick={()=>this.filterCategory(prod.id)} >{prod.name}</li>)
                }</ul></div>
    }

}

export default connect(state => ({
    products: state.products,
    categories: state.categories,
}), { categoryFilter, gatCategoriesList })(Categories)
