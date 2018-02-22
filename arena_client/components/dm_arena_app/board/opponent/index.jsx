import React from 'react';

import Minions from '../minions';
import Hero from '../hero';
import Hand from '../hand';

const style = {
  height: '50%',
  backgroundColor: '#d6687b',
};

class Opponent extends React.Component {
  render() {
    return (
      <div className="opponent" style={style}>
        <Hand />
        <Hero />
        <Minions />
      </div> 
    );
  }
}

export default Opponent;