import React, { Component } from 'react'
import Board from './Board.js'
import Title from './Title.js'
import Wintitle from './Wintitle.js'
import Footer from './Footer.js'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerA: {
        img: '/img/CurrencyVaal.png',
        name: 'Corruption'
      },
      playerB: {
        img: '/img/CurrencyRerollRare.png',
        name: 'Chaos'
      },
      xIsNext: true,
      xIsHover: false,
      currentPlayer: {
        img: '/img/CurrencyVaal.png',
        name: 'Corruption'
      },
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

    console.log('GAME :: token i ::', token[i])
    if (token[i] !== null) {
      return false
    }

    console.log('GAME :: handleClick 1 ::', this.state.currentPlayer)

    const xIsNext = this.state.xIsNext
    token[i] = xIsNext ? this.state.playerA : this.state.playerB
    let currentPlayer = !xIsNext ? this.state.playerA : this.state.playerB

    const winner = calculateWinner(token)
    console.log('GAME :: winner ::', winner)
    if (winner !== null) {
      currentPlayer = xIsNext ? this.state.playerA : this.state.playerB
    }

    console.log('GAME :: handleClick 2 ::', this.state.currentPlayer)
    this.setState({
      history: history.concat({
        token
      }),
      xIsNext: !xIsNext,
      stepNumber: history.length,
      currentPlayer
    })
  }

  playAgain () {
    console.log('Play AGAIN');
    this.setState({
      playerA: {
        img: '/img/CurrencyVaal.png',
        name: 'Corruption'
      },
      playerB: {
        img: '/img/CurrencyRerollRare.png',
        name: 'Chaos'
      },
      xIsNext: true,
      xIsHover: false,
      currentPlayer: {
        img: '/img/CurrencyVaal.png',
        name: 'Corruption'
      },
      stepNumber: 0,
      history: [
        {
          token: Array(9).fill(null)
        }
      ]
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const currentPlayer = this.state.currentPlayer

    const winner = calculateWinner(current.token)
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
        <Wintitle
          winner={ winner }
          token={ current.token }
          currentPlayer={ currentPlayer }
          onClick={ () => this.playAgain() }
        />
        <Footer />
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

  // console.log('token :: ', token)

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    // console.log('lines:: ', lines[i])
    if (token[a] && token[a] === token[b] && token[b] === token[c]) {
      // console.log('WINNER WINNER WINNER :: ', lines[i])
      return lines[i]
    }
  }
  return null;
}