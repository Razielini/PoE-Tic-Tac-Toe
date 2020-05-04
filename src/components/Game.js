import React, { Component } from 'react'
import Board from './Board.js'
import Title from './Title.js'

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

    const winner = calculateWinner(token)
    if (winner || token[i]) {
      return;
    }

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

    const winner = calculateWinner(current.token)
    console.log('game :: winner ::', winner)
    return (
      <div
        className="game-section"
      >
        <Title
          value="Poe TIC TAC TOE"
        />
        <Board
          onClick={ (i) => this.handleClick(i) }
          token={ current.token }
          currentPlayer={ currentPlayer }
          winner={ winner }
        />
      </div>
    )
  }
}

function calculateWinner(token) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  console.log('token :: ', token)

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    console.log('lines:: ', lines[i])
    console.log('a :: ', token[a])
    console.log('b :: ', token[b])
    console.log('c :: ', token[c])
    if (token[a] && token[a] === token[b] && token[b] === token[c]) {
      return lines[i]
    }
  }
  return null;
}