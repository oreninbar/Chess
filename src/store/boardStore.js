import { observable, action } from 'mobx'

// import {Soldier} from '../players/soldier.js'
import { Rook } from '../players/rook.js'
import { Knight } from '../players/knight.js'
import { King } from '../players/king.js'
import { Bishop } from '../players/bishop.js'
import { Queen } from '../players/queen.js'
import { Pawn } from '../players/pawn.js'

export class BoardStore {
    @observable boardMatrix
    constructor() {
        this.dimention = 8
        this.boardMatrix = this.generateBoard()
    }


    generateBoard() {
        let matrix = []
        for (let r = 0; r < this.dimention; r++) {
            let row = []
            for (let c = 0; c < this.dimention; c++) {
                if (r === 1)
                    row.push(new Pawn(r, c, "https://img.icons8.com/officel/40/000000/pawn.png", "p1"))
                else if (r === 6)
                    row.push(new Pawn(r, c, "https://img.icons8.com/ultraviolet/40/000000/pawn.png", "p2"))
                else row.push(0)
            }
            matrix.push(row)
        }
        matrix[0][0] = new Rook(0, 0, "https://img.icons8.com/officel/40/000000/rook.png", 'r1', 'rook')
        matrix[0][1] = new Knight(0, 1, "https://img.icons8.com/officel/40/000000/knight.png", 'k1', 'knight')
        matrix[0][2] = new Bishop(0, 2, "https://img.icons8.com/officel/40/000000/bishop.png", 'b1', 'bishop')
        matrix[0][3] = new Queen(0, 3, "https://img.icons8.com/officel/40/000000/queen.png", 'q1', 'queen')
        matrix[0][4] = new King(0, 4, "https://img.icons8.com/officel/40/000000/king.png", 'K1', 'king')
        matrix[0][5] = new Bishop(0, 5, "https://img.icons8.com/officel/40/000000/bishop.png", 'b1', 'bishop')
        matrix[0][6] = new Knight(0, 6, "https://img.icons8.com/officel/40/000000/knight.png", 'k1', 'knight')
        matrix[0][7] = new Rook(0, 7, "https://img.icons8.com/officel/40/000000/rook.png", 'r1', 'rook')

        matrix[7][0] = new Rook(7, 0, "https://img.icons8.com/ultraviolet/40/000000/rook.png", 'r2', 'rook')
        matrix[7][1] = new Knight(7, 1, "https://img.icons8.com/ultraviolet/40/000000/knight.png", 'k2', 'knight')
        matrix[7][2] = new Bishop(7, 2, "https://img.icons8.com/ultraviolet/40/000000/bishop.png", 'b2', 'bishop')
        matrix[7][3] = new Queen(7, 3, "https://img.icons8.com/ultraviolet/40/000000/queen.png", 'q2', 'queen')
        matrix[7][4] = new King(7, 4, "https://img.icons8.com/ultraviolet/40/000000/king.png", 'K2', 'king')
        matrix[7][5] = new Bishop(7, 5, "https://img.icons8.com/ultraviolet/40/000000/bishop.png", 'b2', 'bishop')
        matrix[7][6] = new Knight(7, 6, "https://img.icons8.com/ultraviolet/40/000000/knight.png", 'k2', 'knight')
        matrix[7][7] = new Rook(7, 7, "https://img.icons8.com/ultraviolet/40/000000/rook.png", 'r2', 'rook')
        return matrix
    }

    @action moveSoldier(soldier, place) {
        debugger
        console.log(this.boardMatrix);
        let row = Math.floor(soldier / 10)
        let col = parseInt(soldier) % 10
        let newRow = Math.floor(place / 10)
        let newCol = parseInt(place) % 10

        
        this.boardMatrix[row][col].makeMove(newRow, newCol)
        this.boardMatrix[newRow][newCol] = this.boardMatrix[row][col]
        this.boardMatrix[row][col] = 0


    }

}