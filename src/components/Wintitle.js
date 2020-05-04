import React from 'react'

export default function Wintitle(props) {
  console.log('wintitle :: ', props.currentPlayer)
  return (
    <div
      className={`win-title ${ props.winner === null ? 'visibility-hidden' : null }`}
    >
      {`The ${ props.currentPlayer.name } Win!`}
      <img
        src={ props.currentPlayer.img }
        alt={ props.currentPlayer.name }
      />
    </div>
  );
}