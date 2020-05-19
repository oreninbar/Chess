import React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import Board from './componenets/board/Board';



const App = inject('boardStore')(observer((props) => {
  return (
    <div className="App">
      <Board />
    </div>
  )

}))

export default App;
