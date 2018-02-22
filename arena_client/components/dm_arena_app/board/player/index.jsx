import React from 'react';

import Minions from '../minions';
import Hero from '../hero';
import Hand from '../hand';

const style = {
  height: '50%',
  backgroundColor: '#aad668',
};

class Player extends React.Component {
  render() {
    return (
      <div className="player" style={style}>
        <Minions />
        <Hero />
        <Hand showing={true} />
      </div> 
    );
  }
}

export default Player;