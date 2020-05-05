import React from 'react'

export default function Wintitle(props) {
  console.log('wintitle :: ', props.token)
  const winner = props.winner
  const draw = props.token.filter(Boolean).length;
  console.log('draw :: ', draw)

  let klass = 'visibility-hidden'

  if(draw === 9 && winner === null) {
    klass = ''
  }

  if(winner !== null) {
    klass = ''
  }

  return (
    <div
      className={ klass }
    >

    {
      draw === 9 && winner === null ?
      <div
        className="win-title"
      >
        Draw Game!
      </div> : <div
                  className="win-title"
                >
                  {`The ${ props.currentPlayer.name } Win!`}
                  <img
                    src={ props.currentPlayer.img }
                    alt={ props.currentPlayer.name }
                  />
                </div>
    }
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