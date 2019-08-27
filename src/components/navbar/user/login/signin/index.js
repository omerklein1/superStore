import React, { Component } from 'react'
import axios from 'axios'
import './signin.css'

class Signin extends Component {
    
    submit = (e) => {
        e.preventDefault()

        const { userName, password, conPassword, firstName, lastName, email, image } = this.refs

        // console.log('pass:', password , 'con:' , conPassword)
        if(password.value !== conPassword.value) return alert('אימות סיסמא נכשל! אנא הזן את אותה הסיסמא ב2 השדות') 

        const newUser = {
            userName: userName.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            image: image.value
         }
    axios.put('http://localhost:1200/signin', newUser).then(res => {
        console.log('submit', res.data)
window.location.reload()
        })
            .catch (err => {
    console.log(err)
})
    }

render() {
    return <form className='login' onSubmit={this.submit}>
        <label>
            <span>שם משתמש:</span>
            <input ref='userName' type='text' placeholder='שם משתמש' required />
        </label>
        <label>
            <span>סיסמא:</span>
            <input ref='password' type='password' placeholder='סיסמא' required />
        </label>
        <label>
            <span>אימות סיסמא:</span>
            <input ref='conPassword' type='password' placeholder='הקש שנית את הסיסמא' required />
        </label>
            <label>
                <span>שם פרטי:</span>
                <input ref='firstName' type='text' placeholder='שם פרטי' required />
            </label>
            <label>
                <span>שם משפחה:</span>
                <input ref='lastName' type='text' placeholder='שם משפחה' required />
            </label>
            <label>
                <span>כתובת דואר אלקטרוני:</span>
                <input ref='email' type='email' placeholder='דואר אלקטרוני' required />
            </label>
            <label>
                <span>תמונה:</span>
                <input ref='image' type='url' placeholder='הזן כתובת תמונה' />
            </label>
        <input className="submit" type='submit' value='הרשם'/>
    </form>

}
}

export default Signin