import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
// import {Game} from './store/game.js'
import { BoardStore } from './store/boardStore';


let boardStore = new BoardStore()
console.log(boardStore.boardMatrix);

let stores = {
    boardStore
}

ReactDOM.render(<Provider{...stores}><App /></Provider>, document.getElementById('root'));





