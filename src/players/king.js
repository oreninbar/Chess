import { Soldier } from './soldier.js'
export class King extends Soldier {

    checkMove(desirableR,desirableC) {
                //debugger

        if (this.checkPosition(desirableR,desirableC)) {
            if (Math.abs(desirableC - this.c) < 2 && Math.abs(desirableR - this.r) < 2)
                return true
            else return false
        }
    }






}