// import axios from 'axios'
// import data from './dataPRO.json'
import axios from 'axios'

// export const initList = () => dispatch => {
//     axios.get('https://restcountries.eu/rest/v2/all')
//         .then(res => {
//             dispatch({ payload: res.data, type: 'COUNTRIES_LIST_INIT' })
//         })
//         .catch(error => dispatch({ payload: error.message, type: 'COUNTRIES_LIST_ERROR' })
//         );
// }
export const change = (text) => dispatch => {
    dispatch({ payload: text, type: 'TEXT_READED' })
}

export const gatDataList = () => async dispatch => {
    axios.get('https://omerstore.herokuapp.com/products')
        .then(res => {
            dispatch({
                type: 'DATA_READER',
                payload: res.data
            })
        })
        .catch(error => dispatch({ payload: error.message, type: 'DATA_ERROR' })
        );
}



export const gatCategoriesList = () => async dispatch => {
    axios.get('https://omerstore.herokuapp.com/categories')
        .then(res => {
            dispatch({
                type: 'CATEGORIES_READER',
                payload: res.data
            })
        })
        .catch(error => dispatch({ payload: error.message, type: 'CATEGORIES_ERROR' })
        );
}
export const gatSubCategoriesList = () => async dispatch => {
    axios.get('https://omerstore.herokuapp.com/subCategories')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: 'SUBCATEGORIES_READER',
                payload: res.data
            })
        })
        .catch(error => dispatch({ payload: error.message, type: 'SUBCATEGORIES_ERROR' })
        );
}


export const categoryFilter = (id) => dispatch => {
    dispatch({
        type: 'SENDING_DATA',
        payload: id
    })
}

// export const changeTheBtn = (status) => dispatch => {
//     status? status = false : status = true
//     dispatch({
//         type: 'BTN_CHANGE',
//         payload: status
//     })
// }

export const addToCart = (prod) => dispatch => {
    console.log(prod)
    dispatch({
        type: 'ADD_TO_CART',
        payload: prod
    })
}

export const removeFromCart = (prod) => dispatch => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: prod
    })
}

export const emptyCart = () => dispatch => {
    dispatch({
        type: 'EMPTY_CART',
        payload: ''
    })
}

export const adminState = (admin) => dispatch => {
    dispatch({
        type: 'CHANGE_ADMIN_STATE',
        payload: !admin
    })
}

