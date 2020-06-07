// import Board from './boardStore.js'
import { observable, action } from 'mobx'
// const statman = require('statman');

export class GameStore {
    @observable onGoing
    @observable gameBoard
    @observable turn = 1
    @observable onGoing
    @observable timer

    constructor(player1, player2, boardGame) {
        this.onGoing = true
        this.gameBoard = boardGame
        this.gameId = ''
        this.player1 = player1
        this.player2 = player2
    }

    generatGameId() {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    @action changeTurn() {
        this.turn = 1 ? 2 : 1
    }

    @action changesGameStatus() {
        this.onGoing = true ? false : true
    }

    playGame() {
        console.log('start the game');
        while (this.onGoing) {
            alert(`player ${this.turn} start play`);
            let soldier = prompt(`enter soldier`)
            let place = prompt(`enter place`)
            if (soldier === 'a') {
                this.onGoing = false
                break
            }
            this.gameBoard.moveSoldier(soldier, place)
            this.changeTurn()
        }
    }


}