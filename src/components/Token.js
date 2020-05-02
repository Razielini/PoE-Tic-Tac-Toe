import React, { Component } from 'react'

// export default function Token(props) {
export default class Token extends Component {
  constructor(props) {
    super(props)
    this.state = {
      xIsHover: false
    }
  }

  handleHover (currentPlayer, type) {
    const xIsHover = type === 'Enter' ? true : false
    this.setState({
      xIsHover: xIsHover
    })
    console.log('currentPlayer :: TOKEN ::', currentPlayer)
    console.log('isHover :: TOKEN ::', xIsHover)
    console.log('type :: TOKEN ::', type)
  }

  render () {
    const val = this.props.value
    const currentPlayer = this.props.currentPlayer
    const xIsHover = this.state.xIsHover
    return <button
        className="token"
        onClick={ this.props.onClick }
        onMouseEnter={ () => this.handleHover(currentPlayer, 'Enter') }
        onMouseLeave={ () => this.handleHover(currentPlayer, 'Leave') }
      >
        { val ? <img
              src={ this.props.value }
              alt="token"
            /> : null
        }

        { xIsHover ? <img
              src={ currentPlayer }
              alt="hover token"
              className="hover-image"
            /> : null
        }
      </button>
  }
}