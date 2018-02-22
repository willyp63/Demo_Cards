import React from 'react';

import Opponent from './opponent'
import Player from './player'

const style = {
	height: '100vh',
};

class Board extends React.Component {
  render() {
    return (
      <div className="board" style={style}>
        <Opponent />
        <Player />
      </div> 
    );
  }
}

export default Board;