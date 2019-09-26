import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from '../../../actions';
import './search.css'

class Search extends Component {

    changeText = e => {
        const text = e.target.value
        this.props.change(text.toLowerCase())
    }

    render() {
        return <div className="productsTitle">
            <div><h2 className="titlep">מוצרים</h2><props>({this.props.lengthList})</props></div>
            <input className="search" onChange={this.changeText} type="search" placeholder="חפש"></input>
        </div>
    }
}

export default connect(state => ({
}), { change })(Search);;