import { observable } from 'mobx'


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
                if (r == 1)
                    row.push('p1')
                else if (r == 6)
                    row.push('p2')
                else row.push(0)
            }
            matrix.push(row)
        }
        matrix[0][0] = 'r1'
        matrix[0][1] = 'k1'
        matrix[0][2] = 'b1'
        matrix[0][3] = 'q1'
        matrix[0][4] = 'K1'
        matrix[0][5] = 'b1'
        matrix[0][6] = 'k1'
        matrix[0][7] = 'r1'

        matrix[7][0] = 'r2'
        matrix[7][1] = 'k2'
        matrix[7][2] = 'b2'
        matrix[7][3] = 'q2'
        matrix[7][4] = 'K2'
        matrix[7][5] = 'b2'
        matrix[7][6] = 'k2'
        matrix[7][7] = 'r2'


        // for (let i = 0; i < this.dimention; i++)
        //     for (let j = 0; j < this.dimention; j++) {
        //         console.log(matrix[i][j]);
        //     }
        console.log(matrix);
        return matrix
    }



    /*
      matrix[0][0] = 'r1'
        matrix[1][0] = 'k1'
        matrix[2][0] = 'b1'
        matrix[3][0] = 'q1'
        matrix[4][0] = 'K1'
        matrix[5][0] = 'b1'
        matrix[6][0] = 'k1'
        matrix[7][0] = 'r1'

        matrix[0][7] = 'r2'
        matrix[1][7] = 'k2'
        matrix[2][7] = 'b2'
        matrix[3][7] = 'q2'
        matrix[4][7] = 'K2'
        matrix[5][7] = 'b2'
        matrix[6][7] = 'k2'
        matrix[7][7] = 'r2'
    @observable board = []

    @action initBoard() {
        for (let i = 1; i < 9; i++)
                this.board.push(i)
    }

    */
    // @action placeKnight(){


    // }
    // @action placePawn(){

    // }
    // @action placeRook(){

    // }
    // @action placeQueen(){

    // }
    // @action placeKing(){

    // }
    // @action placeBishop(){

    // }
}