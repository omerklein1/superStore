import React, { Component } from 'react'
import { connect } from 'react-redux'
import { categoryFilter } from '../../actions'
import { gatCategoriesList } from '../../actions'
import { gatSubCategoriesList } from '../../actions'
import './categories.css'

class Categories extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        this.props.gatCategoriesList()
        this.props.gatSubCategoriesList()
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
        let { categories, subCategories } = this.props
        let {show} = this.state

        return <div id="container" className="categories">
            {/* <h2>קטגוריות</h2> */}
            <ul className="categories-list dropdown"><li onClick={() => this.filterCategory('')}>All</li>
                {categories.map(cat => <> { <li onClick={() => this.filterCategory(cat.id)}>{cat.name}</li>}
                {/* {show? subCategories.filter(sub=> sub.categoryId === cat.id).map(sub=> <li>{sub.name}</li>) : null} */}
                </>
                )}
            </ul>
        </div>
    }

}

export default connect(state => ({
    products: state.products,
    categories: state.categories,
    subCategories: state.subCategories,
}), { categoryFilter, gatCategoriesList, gatSubCategoriesList })(Categories)
