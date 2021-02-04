export function Winner(squares){
    const lines=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],

    ];
  
    for (let i=0;i<lines.length; i+=1){
        
        const[a,b,c]=lines[i];
        
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            console.log(squares[a])
            return {winner:squares[a],
                winningSquares:[a,b,c]

            }
        }    
    }
    return {winner:null,
          winningSquares:[]

    }
}