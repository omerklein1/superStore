import React, { Component } from 'react'
import Navbar from "./navbar"
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
        const { dataList } = this.props
console.log(this.props.dataList)
        return dataList ? <main className='components'>
            <Navbar />
            <Categories />
            <ProductsList className="countainer"/>
        </main> : 'טוען'
    }
}



export default connect(state => ({
    dataList: state.dataList
}), { gatDataList })(Components)

