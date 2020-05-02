import React, { Component } from 'react'
import Board from './Board.js'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: {
        list: [
          'X', '0', 'Y', 'Z'
        ],
        playerA: 'X',
        playerB: '0'
      },
      xIsNext: true,
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

    token[i] = this.state.xIsNext ? '/img/CurrencyVaal.png' : '/img/CurrencyRerollRare.png'
    console.log(`token[${i}] :: ${token[i]}`)

    this.setState({
      history: history.concat({
        token
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  handleHover (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const token = current.token.slice()

    token[i] = this.state.xIsNext ? '/img/CurrencyVaal.png' : '/img/CurrencyRerollRare.png'
    console.log(`handleHover[${i}] ::`)

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

    return (
      <div>
        Hello World
        <Board
          onClick={ (i) => this.handleClick(i) }
          token={ current.token }
          onMouseEnter={ (i) => this.handleHover(i) }
        />
        <pre>
          { this.state.icon.playerA }
          { this.state.icon.playerB }
          -{ this.state.icon.list }
        </pre>
      </div>
    )
  }
}