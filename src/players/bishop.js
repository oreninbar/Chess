import { Soldier } from './soldier.js'
export class Bishop extends Soldier {


    checkMove(desirableR,desirableC) {
        debugger
        if (this.checkPosition(desirableR,desirableC)) {
            if (this.id === 'b1') {
                if (Math.abs(desirableC - this.c) === Math.abs(desirableR - this.r)) {
                    return true
                }
                else return false
            }
        }
        else return false

    }





}