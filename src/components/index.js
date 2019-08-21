import React, { Component } from 'react'
import Navbar from "./navbar"
// import Login from './login'
import Categories from './categories'
import ProductsList from './productsList'
import { connect } from 'react-redux'
import { gatDataList } from '../actions'
import './components.css'

class Components extends Component {

    componentDidMount() {
        this.props.gatDataList()
    }
    onTextChange = (text) => {
        this.setState({ text })
    }

    render() {
        const { products } = this.props
console.log(this.props.products)
        return products ? <main className='components'>
            <Navbar />
            <Categories />
            <ProductsList className="countainer"/>
        </main> : 'טוען'
    }
}



export default connect(state => ({
    products: state.products
}), { gatDataList })(Components)

