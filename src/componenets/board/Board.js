import React from 'react'
import { observer, inject } from 'mobx-react'
import Cell from '../cell/Cell';
import './Board.css'

const Board = inject('boardStore')(observer((props) => {

    return (
        <div className='main-container'>
            {props.boardStore.boardMatrix.map((row, i) => {
                return (
                    <div className='row-element' key={i}>
                        {row.map((col, j) =>
                            <Cell key={j} item={col} />
                        )}
                    </div>

                )
            })}
        </div>
    )

}))

export default Board

/*
<img src="https://img.icons8.com/officel/40/000000/king.png"/>
<img src="https://img.icons8.com/officel/40/000000/pawn.png"/>
<img src="https://img.icons8.com/officel/40/000000/queen.png"/>
<img src="https://img.icons8.com/officel/40/000000/knight.png"/>
<img src="https://img.icons8.com/officel/40/000000/rook.png"/>
<img src="https://img.icons8.com/officel/40/000000/bishop.png"/>

<img src="https://img.icons8.com/ultraviolet/80/000000/rook.png"/>
<img src="https://img.icons8.com/ultraviolet/80/000000/king.png"/>
<img src="https://img.icons8.com/ultraviolet/80/000000/bishop.png"/>
<img src="https://img.icons8.com/ultraviolet/80/000000/knight.png"/>
<img src="https://img.icons8.com/ultraviolet/80/000000/queen.png"/>
<img src="https://img.icons8.com/ultraviolet/80/000000/pawn.png"/>
*/