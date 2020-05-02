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
                xIsHover && !val ? currentPlayer : val
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
    const val = this.props.value || null
    const currentPlayer = this.props.currentPlayer || null
    const xIsHover = this.state.xIsHover || null
    return <button
        className="token cursor-pointer"
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