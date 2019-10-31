import React, { Component } from 'react'
import './home.css'

class Home extends Component {

    render() {
        return <>
            <section className="home1">
                <img className="img1"
                    src="https://cdn.guidingtech.com/media/assets/WordPress-Import/2015/04/shutterstock_148831151-e1429555051846.jpg"
                    alt="" />

                <div className="text1">
                    <h2>new collection</h2>
                    <button onClick={() => this.props.goShooping()}>start shopping</button>
                </div>
            </section>

            <section className="home2">
                <li
                    onClick={() => this.props.goShooping()}
                    style={{ backgroundImage: 'url(https://static01.nyt.com/images/2016/01/07/technology/personaltech/07techfix-samsungsub/07techfix-samsungsub-articleLarge.jpg?quality=90&auto=webp)' }}>
                    <a>TV</a></li>
                <li
                    onClick={() => this.props.goShooping()}
                    style={{ backgroundImage: 'url(https://gwebtechworld.com/wp-content/uploads/2019/06/Galaxy-A10-A30-A50.jpg)' }}>
                    <a>Smartphones</a></li>
                <li
                    onClick={() => this.props.goShooping()}
                    style={{ backgroundImage: 'url(https://simplyfixit.co.uk/wp-content/uploads/2012/10/chillblastsystem1.jpg)' }}>
                    <a>Computers</a></li>
            </section>

            <section className="home1 ">
                <img className=" img1 img3"
                    src="http://www.geek.com/wp-content/uploads/2010/09/hp_estation_tablet.png" alt="" />
                <div className="text1 text3">
                    <h2>Global Sale</h2>
                    <button onClick={() => this.props.goShooping()}>buy now</button>
                </div>
            </section>

        </>

    }
}

export default Home