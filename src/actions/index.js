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
    dispatch({payload: text, type: 'TEXT_READED'})
}

export const gatDataList = () => async dispatch => {
axios.get('http://localhost:1200/products')
.then(res => {
    dispatch({
        type: 'DATA_READER',
        payload: res.data })
      })
          .catch(error => dispatch({ payload: error.message, type: 'DATA_ERROR' })
        );
    }

    

    export const gatCategoriesList = () => async dispatch => {
        axios.get('http://localhost:1200/categories')
        .then(res => {
            dispatch({
                type: 'CATEGORIES_READER',
                payload: res.data })
              })
                  .catch(error => dispatch({ payload: error.message, type: 'CATEGORIES_ERROR' })
                );
            }
        

    export const categoryFilter = (id) => dispatch => {
dispatch({
  type: 'SENDING_DATA',
        payload: id
})
    }

    export const addToCart = () => dispatch => {

    }

