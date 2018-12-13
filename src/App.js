import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import reducers from './reducers'
import thunk from 'redux-thunk';
import Title from './containers/Title'
import Films from './containers/Films'

$.get('/films/random').done((res) => {
    console.log(res)
    const store = createStore(
        // reducers,
        (state = {poo: "shitty poo", action}) => {
            return state
        },
        {
            randomFilms: res,
            title: "abdi"
        },
        applyMiddleware(thunk)
    )

    const backgroundStyle = {
        margin: "10px 20px",
        backgroundColor: "grey",
        padding: "30px 90px",
        borderRadius: "10px",
        fontFamily: "Trebuchet MS"
    }

    const bondImg = {
        height: "50px",
        float: "right",
    }

    render(
        <Provider store={store}>
            <div style={backgroundStyle}>
                <img src="http://anygoodfilms.com/wp-content/uploads/2017/05/007-Logo.png" style={bondImg} />
                <Title />
                <Films />
            </div>
        </Provider>,
        document.getElementById('app')
    )
})

