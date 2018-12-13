import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import Title from './containers/Title'
import Films from './containers/Films'
import reducers from './reducers'

$.get('/films/random').done((res) => {
    console.log(res)
    const store = createStore(
        reducers,
        // (state = {poo: "shitty poo", action}) => {
        //     return state
        // },
        {
            randomFilms: res,
            title: "abdi"
        },
        applyMiddleware(thunk)
    )



    render(
        <Provider store={store}>
            <div>
                <p>hello DUCK</p>
                <Title />
                <Films />
            </div>
        </Provider>,
        document.getElementById('app')
    )
})

