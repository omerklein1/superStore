import React, { Component } from 'react'
import Navbar from "./navbar"
// import Login from './login'
import Categories from './categories'
import ProductsList from './productsList'
import Loader from './loader'
import Home from './home'
import { connect } from 'react-redux'
import { gatDataList } from '../actions'
import './components.css'

class Components extends Component {
    state = { home: true }

    componentDidUpdate() {
        const app = document.querySelector('.App')
        console.log(app)
        app.style.height = this.state.home ? 'auto' : '100vh'
    }
    com
    componentDidMount() {
        this.props.gatDataList()
    }

    onTextChange = (text) => {
        this.setState({ text })
    }

    goShooping = () => {
        const { home } = this.state
        console.log(home)
        this.setState({ home: !home })
        console.log(home)
    }

    render() {
        const { products } = this.props,
            { home } = this.state
        return <>
            <header><Navbar home={home} goShooping={this.goShooping} /></header>
            {home ? <Home goShooping={this.goShooping} /> :
                <main>
                    {products ? <><Categories />
                        <ProductsList className="countainer" /></> : <Loader />}
                </main>}
        </>
    }
}



export default connect(state => ({
    products: state.products
}), { gatDataList })(Components)

