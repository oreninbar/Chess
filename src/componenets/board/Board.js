import React from 'react'
import { observer, inject } from 'mobx-react'
import Cell from '../cell/Cell';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './Board.css'

const Board = inject('gameStore')(observer((props) => {
    return (
        <div className='main-container'>
            {props.gameStore.gameBoard.boardMatrix.map((row, i) => {
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

