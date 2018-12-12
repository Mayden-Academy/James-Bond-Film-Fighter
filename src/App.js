// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import DisplayFilmInfo from "./DisplayFilmInfo";
//
// class App extends Component {
//
//     constructor(props)
//     {
//         super(props)
//         this.state = [{name: "goldeneye", image: "hello", date: "4466"}, [{name: "octopussy", image: "hello", date: "567"}]
//         this.dataFetch()
//             this.filmBond()
//     }
//
//   render() {
//     return (
//       <div className="App">
//
//       </div>
//       ( function () {
//           var array = this.state;
//
//           array.map( a => <
//
//           )
//           }
//
//       )
//     );
//   }
//     dataFetch = () => {
//         fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
//             .then((data) => {
//                 return data.json()
//             })
//             .then( (data) => {
//                 this.setState[{name: "goldeneye", image: "", date: ""}]
//                 this.setState({doubleDeckers:parseFloat(this.state.price/0.6).toFixed(0)})
//
//             })
//     }
//
//
//
// }
//
// export default App;

import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import reducers from './reducers'
import thunk from 'redux-thunk';

$.get('/notes/').done((res) => {
    const store = createStore(
        // reducers,
        () => {},
        {
            // notes: res
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

