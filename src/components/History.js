import React from 'react'

const History = ({history,moveTo,currentMove}) => {
    return (
        <div>
            <ul>{
                history.map((_,move)=>{
                    return ( <li value={move} key={move}><button className="button" type="button"
                    style={{
                        fontWeight:move===currentMove?'bold':'normal',
                        border:'none',
                        backgroundColor:'whitesmoke'
                    }}
                    onClick={()=>{
                        moveTo(move)
                    }}
                    >{move===0?'Go to Start':`Go to move #${move}`}</button>
                    </li>);
                })
                }
               
            </ul>
        </div>
    )
}

export default History
