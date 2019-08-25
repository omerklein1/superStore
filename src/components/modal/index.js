import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
constructor(props){
    super(props)

    this.state = {}
}

componentDidUpdate(prevProps){
if(prevProps.open != this.props.open){
    this.setState({
        open: this.props.open
    })
}
}
    render() {
        const { children, title } = this.props
        const {open} = this.state
        return open? <div className='popup' /* onClick={()=> this.setState({ open: false})} */>
            <div className='popup_inner'>
                <button onClick={()=> this.setState({ open: false})}>X</button>
                <h3>{title}</h3>
                <div>{children}</div>
            </div>
        </div> : null
    }
}

export default Modal