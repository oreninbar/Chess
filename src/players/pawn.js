import { Soldier } from './soldier.js'

export class Pawn extends Soldier {
    constructor(c, r, img, id) {
        super(c, r, img, id)
        this.firstMove = true
    }


    checkMove(desirableR, desirableC) {
        debugger
        if (this.checkPosition(desirableR, desirableC)) {
            if (this.id === 'p1') {
                if (this.firstMove) {
                    if (this.c === desirableC && desirableR === (this.y + 1 || this.y + 2))
                        return true
                    else return false
                }
                else if (this.c === desirableC && desirableR === this.y + 1)
                    return true
                else if ((this.c + 1 === desirableC || this.c - 1 === desirableC) && desirableR === this.r + 1)
                    return true
                else return false
            }
            else {

                if (this.firstMove) {
                    if (this.c === desirableC && desirableR === (this.r - 1 || this.r - 2))
                        return true
                    else return false
                }
                else if (this.c === desirableC && desirableR === this.r - 1)
                    return true
                else if ((this.c + 1 === desirableC || this.c - 1 === desirableC) && desirableR === this.r - 1)
                    return true

                else return false
            }
        }
    }





}