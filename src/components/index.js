import React, { Component } from 'react'
import Navbar from "./navbar"
// import Login from './login'
import Categories from './categories'
import ProductsList from './productsList'
import Loader from './loader'
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

    scrolling = () => {
        let scroll = document.querySelector('body')
        console.log(scroll.scrollTop)
    }

    render() {
        const { products } = this.props
        return <>
            <div onScroll={this.scrolling} id="homepage">
                <img className="homepage" src="img/homepage.jpg" alt="homepage" />
                <div class="homepage-container">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <span class="text">Scroll down</span>
                </div>
            </div>
            {products ? <main className='components' >
                <Navbar />
                <Categories />
                <ProductsList className="countainer" />
            </main>
                : <Loader />}
        </>
    }
}



export default connect(state => ({
    products: state.products
}), { gatDataList })(Components)

