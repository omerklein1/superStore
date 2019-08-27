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
        return <><h2>מוצרים</h2><props>({this.props.lengthList})</props>
        <input className="search" onChange={this.changeText} type="search" placeholder="חפש"></input>
    </>
    }
}

export default connect(state => ({
}), {change})(Search);;