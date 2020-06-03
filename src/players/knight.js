import { Soldier } from './soldier.js'
export class Knight extends Soldier {



    checkMove(desirableR,desirableC) {
        debugger
        if (this.checkPosition(desirableR,desirableC)) {
            if (this.c + 1 === desirableC && this.r + 2 === desirableR)
                return true
            else if (this.c + 2 === desirableC && this.r + 1 === desirableR)
                return true
            else if (this.c + 2 === desirableC && this.r - 1 === desirableR)
                return true
            else if (this.c + 1 === desirableC && this.r - 2 === desirableR)
                return true
            else if (this.c - 1 === desirableC && this.r - 2 === desirableR)
                return true
            else if (this.c - 2 === desirableC && this.r - 1 === desirableR)
                return true
            else if (this.c - 2 === desirableC && this.r + 1 === desirableR)
                return true
            else if (this.c - 1 === desirableC && this.r + 2 === desirableR)
                return true
        }
        else return false
    }





}