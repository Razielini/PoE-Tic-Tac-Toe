import React, { Component } from 'react'

// export default function Token(props) {
export default class Token extends Component {
  render () {
    return (
      <button
        className="token"
        onClick={ this.props.onClick }
        onMouseEnter={ this.props.onMouseEnter }
        onMouseLeave={ this.onMouseLeave }
      >
        <img
          src={ this.props.value }
        />
      </button>
    )
  }
}