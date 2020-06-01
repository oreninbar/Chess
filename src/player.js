import { observable } from "mobx"

export class Player {
    @observable rank
    @observable win
    @observable loses
    @observable token
    @observable alive


    constructor(name) {
        this.rank = 1
        this.id = this.generatPlayerId()
        this.name = name
        this.win = 0
        this.token = 100000

        // this.email=' '
        // this.gender=' '
        // this.phoneNumber=' '
        // this.age=' '
    }

    generatPlayerId() {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    makeMove(board) {


    }









}