import React from 'react'

const Status = ({winner,current}) => {
    const noMovesLeft=current.board.every((el)=>el!==null)
    return (
        <div>
            <h2>{winner && `Winner is ${winner}` }</h2>
            <h2>{!winner&& `Next Player is ${current.isXnext ?'X':'0'}`}</h2>
            <h2>{!winner && noMovesLeft&& 'X And O tied'}</h2>
        </div>
    )
}

export default Status
