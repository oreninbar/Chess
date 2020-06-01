
export class Soldier {
    constructor(x, y, img, id, name) {
        this.name = name
        this.id = id
        this.alive = true
        this.x = x
        this.y = y
        this.img = img

    }

    changePosition(x, y) {
        this.x = x
        this.y = y
    }

    checkPosition(x, y) {
        return (!(x < 1 || x > 8 || y < 1 || y > 8))
    }

}

