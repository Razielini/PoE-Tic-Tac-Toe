import React, { Component } from 'react'

export default class Token extends Component {
  constructor(props) {
    super(props)
    this.state = {
      xIsHover: false
    }
  }

  handleImage (xIsHover, currentPlayer, val) {
    let res = null
    if (xIsHover || val) {
      res = <img
              src={
                xIsHover && !val ? currentPlayer.img : val
              }
              className={
                xIsHover && !val ? 'hover-image' : null
              }
              alt="token"
            />
    }

    return res
  }

  render () {
    const winner = this.props.winner || null
    const position = this.props.position
    let imWinner = false
    if (Array.isArray(winner)) {
      imWinner = winner.includes(position)
    }
    const val = this.props.value?.img || null
    const currentPlayer = this.props.currentPlayer || null
    const xIsHover = this.state.xIsHover || null
    return <button
        className={`token cursor-pointer ${ imWinner ? 'token-hover': null }`}
        onClick={ this.props.onClick }
        onMouseEnter={ 
          () => this.setState({
            xIsHover: true
          })
        }
        onMouseLeave={ 
          () => this.setState({
            xIsHover: false
          })
        }
      >
        { this.handleImage (xIsHover, currentPlayer, val) }
      </button>
  }
}