
export class Soldier {
    constructor(c, r, img, id, name) {
        this.name = name
        this.id = id
        this.alive = true
        this.c = c
        this.r = r
        this.img = img

    }

    changePosition(r, c) {
        this.c = c
        this.r = r
    }

    checkPosition(r, c) {
        return (!(c < 0 || c > 8 || r < 0 || r > 8))
    }

    makeMove(r, c) {
        if (this.checkMove(r, c)) {
            this.changePosition(r, c)
        }
    }

}

