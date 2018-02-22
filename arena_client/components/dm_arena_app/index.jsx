import React from 'react';

import Board from './board'

class DmArenaApp extends React.Component {
  render() {
    return (
      <div className="dm-arena-app">
        <Board />
      </div> 
    );
  }
}

export default DmArenaApp;