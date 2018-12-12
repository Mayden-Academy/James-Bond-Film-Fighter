import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import reducers from './reducers'
import thunk from 'redux-thunk';
import Title from './containers/Title'
import Films from './components/Films'

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



    render(
        <Provider store={store}>
            <div>
                <p>hello world</p>
                <Title />
                <Films films={
                    [
                        {
                            title: "a",
                            date: "today",
                            imgUrl: "HH.com"
                        },
                        {
                            title: "b",
                            date: "tomorrow",
                            imgUrl: "HH.com/1"
                        }
                    ]
                }/>

            </div>
        </Provider>,
        document.getElementById('app')
    )
})

