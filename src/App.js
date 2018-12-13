import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import Title from './containers/Title'
import Films from './containers/Films'
import reducers from './reducers'

$.get('/films/random').done((res) => {
    const store = createStore(
        reducers,
        {
            randomFilms: res,
            title: "abdi"
        },
        applyMiddleware(thunk)
    )

    const backgroundStyle = {
        margin: "10px 20px",
        "background-color": "grey",
        padding: "30px 90px",
        "border-radius": "10px",
        "font-family": "Trebuchet MS"
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

