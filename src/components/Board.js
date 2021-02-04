import React,{useState} from 'react'
import Square from './Square';
import './Board.css'
import { Winner } from '../helper/winner'
import History from './History'
import Status from './Status';
function Board() {
 const[history,setHistory]=useState([{board:Array(9).fill(null), isXnext:false}]);
 const [nextMove, setnextMove] = useState(0)
 const current=history[nextMove];

 console.log(history)


const{ winner,winningSquares} =Winner(current.board);
//const isWinningSquare=winningSquares.incluldes(position)
     
     //const message=winner?`Winner is ${winner}`:`Next Player is ${current.isXnext?'0':'X'}` 
     
 const handleSquareClick=(position)=>{
     if(current.board[position] || winner){
         return
     }
     
     
          setHistory((prev)=>{
              
              const last=prev[prev.length-1];
              
                   const newboard=last.board.map((square,pos)=>{
                       if(pos===position){
                           
                           return last.isXnext?'0':'X';
                       }
                       return square
                   })
                //    return prev.concat({board:newboard,isXnext:!last.isXnext})
                return [...history,{board:newboard,isXnext:!last.isXnext}]
          })
         setnextMove(prev=>prev+1)
 }

 const renderSquare=position=>{
       return<Square value={current.board[position]  } 
       onClick={()=>handleSquareClick(position)} />
 }
 const moveTo=(move)=>{
     setnextMove(move)
 }
    return (
        <div className="board">
            <Status winner={winner} current={current} />
            <div className="first">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="second">
              {renderSquare(3)}
              {renderSquare(4)}
             {renderSquare(5)}
            </div>
            <div className="third">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

            </div>
            <History history={history} moveTo={moveTo} currentMove={nextMove}/>
            
        </div>
    )
}

export default Board
