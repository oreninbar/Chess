import {Soldier} from './soldier.js'

export class Rook extends Soldier {



    checkMove(desirableR, desirableC) {
        debugger
        if (this.checkPosition(desirableR, desirableC)) {
            if (desirableC === 0 || desirableR === 0)
                return true
            else return false
        }
        else return false
    }




}