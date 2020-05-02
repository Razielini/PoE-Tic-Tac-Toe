import React, { Component } from 'react'

// export default function Token(props) {
export default class Token extends Component {
  constructor(props) {
    super(props)
    this.state = {
      xIsHover: false
    }
  }

  render () {
    const val = this.props.value
    const currentPlayer = this.props.currentPlayer
    const xIsHover = this.state.xIsHover
    return <button
        className="token"
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
        { val ? <img
                src={ this.props.value }
                alt="token"
              /> :
                xIsHover ? <img
                src={ currentPlayer }
                alt="hover token"
                className="hover-image"
              /> : null
        }
      </button>
  }
}