import React, { Component } from 'react'
import Token from './Token'

export default class Board extends Component {
  renderToken (i) {
    return <Token
            value={ this.props.token[i] }
            winner={ this.props.winner }
            position={ i }
            onClick={ ()=> this.props.onClick(i) }
            currentPlayer={ this.props.currentPlayer }
            onMouseEnter={ () => this.props.isHover }
            onMouseLeave={ () => !this.props.isHover }
          />
  }

  render () {
    return (
      <div>
        <div className="border-row">
          { this.renderToken(0) }
          { this.renderToken(1) }
          { this.renderToken(2) }
        </div>
        <div className="border-row">
          { this.renderToken(3) }
          { this.renderToken(4) }
          { this.renderToken(5) }
        </div>
        <div className="border-row">
          { this.renderToken(6) }
          { this.renderToken(7) }
          { this.renderToken(8) }
        </div>
      </div>
    )
  }
}