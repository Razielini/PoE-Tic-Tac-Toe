import React, { Component } from 'react'
import Token from './Token'

export default class Board extends Component {
  renderToken (i) {
    return <Token
            value={ this.props.token[i] }
            onClick={ ()=> this.props.onClick(i) }
            onMouseEnter={ () => this.props.onMouseEnter() }
            onMouseLeave={ () => this.props.onMouseLeave() }
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