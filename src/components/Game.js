import React, { Component } from 'react'
import Board from './Board.js'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerA: '/img/CurrencyVaal.png',
      playerB: '/img/CurrencyRerollRare.png',
      xIsNext: true,
      xIsHover: false,
      currentPlayer: '',
      stepNumber: 0,
      history: [
        {
          token: Array(9).fill(null)
        }
      ]
    }
  }

  handleClick (i) {
    console.log(`handleClick[${i}] ::`)
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const token = current.token.slice()

    token[i] = this.state.xIsNext ? this.state.playerA : this.state.playerB
    console.log(`token[${i}] :: ${token[i]}`)

    this.setState({
      history: history.concat({
        token
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const currentPlayer = this.state.xIsNext ? this.state.playerA : this.state.playerB
    console.log('currentPlayer:: game :: ', currentPlayer)

    return (
      <div
        className="game-section"
      >
        Hello World
        <Board
          onClick={ (i) => this.handleClick(i) }
          token={ current.token }
          currentPlayer={ currentPlayer }
        />
      </div>
    )
  }
}