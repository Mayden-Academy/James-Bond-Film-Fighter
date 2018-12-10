import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayFilmInfo from "./DisplayFilmInfo";

class App extends Component {

    constructor(props)
    {
        super(props)
        this.state = [{name: "goldeneye", image: "hello", date: "4466"}, [{name: "octopussy", image: "hello", date: "567"}]
        this.dataFetch()
            this.filmBond()
    }

  render() {
    return (
      <div className="App">




          <DisplayFilmInfo/>

      </div>
    );
  }
    dataFetch = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then((data) => {
                return data.json()
            })
            .then( (data) => {
                this.setState[{name: "goldeneye", image: "", date: ""}]
                this.setState({doubleDeckers:parseFloat(this.state.price/0.6).toFixed(0)})

            })
    }


    filmBond = () => {
        var films = this.state
        


        return response;
    }

}

export default App;
