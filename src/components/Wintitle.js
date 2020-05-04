import React from 'react'

export default function Wintitle(props) {
  console.log('wintitle :: ', props.currentPlayer)
  return (
    <div
      className={props.winner === null ? 'visibility-hidden' : null }
    >
      <div
        className="win-title"
      >
        {`The ${ props.currentPlayer.name } Win!`}
        <img
          src={ props.currentPlayer.img }
          alt={ props.currentPlayer.name }
        />
      </div>
      <div
        className="play-again cursor-pointer"
        onClick={ props.onClick }
      >
        <div>
          Play Again
        </div>
      </div>
    </div>
  );
}