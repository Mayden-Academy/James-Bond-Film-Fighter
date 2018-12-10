import React, { Component } from 'react';

class DisplayFilmInfo extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {price : '', doubleDeckers: ''}
        this.dataFetch()
        this.fetchLoop()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                Current Bitcoin value: £{this.state.price}<br/>
                Which will buy you {this.state.doubleDeckers} Double Deckers.
            </div>
        );
    };

    dataFetch = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then((data) => {
                return data.json()
            })
            .then( (data) => {
                this.setState({price:data.bpi.GBP.rate_float})
                this.setState({doubleDeckers:parseFloat(this.state.price/0.6).toFixed(0)})
            })
    }

    fetchLoop = () => {
        setInterval(this.dataFetch, 30000)
    }

}
}

export default DisplayFilmInfo