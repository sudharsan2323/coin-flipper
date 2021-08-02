import React, { Component } from 'react'
import { choice } from './Helper'
import Coin from './Coin'

class CoinCointainer extends Component{
    static defaultProps = {
        coins : [
            {side: "heads", imgSrc: "https://tinyurl.com/react-coin-head-jpg"},
            {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tail-jpg"}
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.flipCoin = this.flipCoin.bind(this)
    }
    flipCoin(){
        const newCoin = choice(this.props.coins)
        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1,  
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }  
            return newState 
        })
    }
    handleClick(e){
        this.flipCoin()
    }
    render(){
        return (
            <div className="CoinCointainer">
                <h2>
                    Let flip a coin
                </h2>
                {this.state.currCoin && <Coin info = {this.state.currCoin}/>} 
                <button onClick={this.handleClick}>Flip me!</button>
                <p>out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>

            </div>
        )
    }
} 

export default CoinCointainer