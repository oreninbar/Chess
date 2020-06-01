import { Soldier } from './soldier.js'
export class Bishop extends Soldier {


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