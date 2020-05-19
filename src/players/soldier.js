class Soldier{
    constructor(x,y,img){
        this.alive=true
        this.x=x
        this.y=y
        this.img=img

    }

    changePosition(x,y){
        this.x=x
        this.y=y
    }

    checkPosition(x,y){
        return (!(x<1||x>8||y<1||y>8))
    }


    makeMove(x,y){
        if (this.checkPosition(x,y)){
            this.changePosition(x,y)
            return true
        }
        else return false 
    }

}