import React from 'react'
import './Square.css'

const Square = ({onClick,value}) => {
   
    return (
        <div>

            <button type="button" className="btn " onClick={()=>{
                   onClick()
                   
            }} >{value}</button>
            
        </div>
    )
}

export default Square
