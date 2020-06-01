import {Soldier} from './soldier.js'
export class Pawn extends Soldier {

    constructor(x, y, img, id) {
        super(x, y, img, id)
        this.firstMove = true
    }


    checkMove(desirableX, desirableY) {
        // if (this.checkPosition(desirableX, desirableY)) {
        //     if(this,this.firstMove)

        // }
        // else return false
    }

    makeMove(x, y) {
        if (this.checkMove(x, y)) {
            this.changePosition(x, y)
        }
    }




}