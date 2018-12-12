import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import reducers from './reducers'
import thunk from 'redux-thunk';

$.get('/films/random').done((res) => {
    console.log(res)
    const store = createStore(
        // reducers,
        () => {},
        {
            testResponse: res
        },
        applyMiddleware(thunk)
    )



    render(
        <Provider store={store}>
            <div>hello world </div>
        </Provider>,
        document.getElementById('app')
    )
})

