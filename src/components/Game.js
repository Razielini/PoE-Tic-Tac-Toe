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
          squares: Array(9).fill(null)
        }
      ]
    }
  }

  render () {
    return (
      <div>
        Hello World
        <Board />
        <pre>
          { this.state.icon.playerA }
          { this.state.icon.playerB }
          -{ this.state.icon.list }
        </pre>
      </div>
    )
  }
}