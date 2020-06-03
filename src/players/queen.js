import { Soldier } from './soldier.js'
export class Queen extends Soldier {




    checkMove(desirableR, desirableC) {
        debugger
        if (this.checkPosition(desirableR, desirableC)) {
            if ((Math.abs(desirableC - this.c) === Math.abs(desirableR - this.r)) || desirableC === 0 || desirableR === 0)
                return true
            else return false
        }
        else return false
    }





}