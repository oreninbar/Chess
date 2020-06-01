import {Soldier} from './soldier.js'
export class Knight extends Soldier {



    checkMove(desirableX, desirableY) {
        if (this.checkPosition(desirableX, desirableY)) {
            if (this.x + 1 === desirableX && this.y + 2 === desirableY)
                return true
            else if (this.x + 2 === desirableX && this.y + 1 === desirableY)
                return true
            else if (this.x + 2 === desirableX && this.y - 1 === desirableY)
                return true
            else if (this.x + 1 === desirableX && this.y - 2 === desirableY)
                return true
            else if (this.x - 1 === desirableX && this.y - 2 === desirableY)
                return true
            else if (this.x - 2 === desirableX && this.y - 1 === desirableY)
                return true
            else if (this.x - 2 === desirableX && this.y + 1 === desirableY)
                return true
            else if (this.x - 1 === desirableX && this.y + 2 === desirableY)
                return true
        }
        else return false
    }

    makeMove(x,y){
        if (this.checkMove(x,y)){
            this.changePosition(x,y)
        }
    }



    
}