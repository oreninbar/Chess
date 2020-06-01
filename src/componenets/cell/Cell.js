import React from 'react'
import { observer, inject } from 'mobx-react'
import './Cell.css'


const Cell = inject('gameStore')(observer((props) => {

    return (
        
        <div className='cell-container' >
            {props.item ? <img src={props.item.img} alt={props.item.name}/> : null}
        </div>
    )

}))

export default Cell


/*



    function addImage() {
        switch (props.item) {
            case 'r1':
                return "https://img.icons8.com/officel/40/000000/rook.png"
            case 'k1':
                return "https://img.icons8.com/officel/40/000000/knight.png"
            case 'b1':
                return "https://img.icons8.com/officel/40/000000/bishop.png"
            case 'q1':
                return "https://img.icons8.com/officel/40/000000/queen.png"
            case 'K1':
                return "https://img.icons8.com/officel/40/000000/king.png"
            case 'p1':
                return "https://img.icons8.com/officel/40/000000/pawn.png"
            case 'r2':
                return "https://img.icons8.com/ultraviolet/40/000000/rook.png"
            case 'k2':
                return "https://img.icons8.com/ultraviolet/40/000000/knight.png"
            case 'b2':
                return "https://img.icons8.com/ultraviolet/40/000000/bishop.png"
            case 'q2':
                return "https://img.icons8.com/ultraviolet/40/000000/queen.png"
            case 'K2':
                return "https://img.icons8.com/ultraviolet/40/000000/king.png"
            case 'p2':
                return "https://img.icons8.com/ultraviolet/40/000000/pawn.png"
            default:
                console.log('cant find the right image')
        }

        function makeMove(){
            // props.gameStore.boardGame
        }
    }


    */