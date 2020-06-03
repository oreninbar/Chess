import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
// import {Game} from './store/game.js'
import { BoardStore } from './store/boardStore.js'
import { GameStore } from './store/gameStore.js';
import { Player } from './player.js'


// let boardStore = new BoardStore()
// console.log(boardStore.boardMatrix);


let player1 = new Player('oren')
let player2 = new Player('lior')
let boardStore = new BoardStore()
let gameStore = new GameStore(player1, player2, boardStore)
let stores = {
    gameStore: gameStore,
    boardStore: boardStore
}


ReactDOM.render(<Provider{...stores}><App /></Provider>, document.getElementById('root'));

gameStore.playGame()



