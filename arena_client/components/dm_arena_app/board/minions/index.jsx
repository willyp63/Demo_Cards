import React from 'react';

import Minion from '../minion';

const style = {
  height: '33.33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
};

class Minions extends React.Component {
  render() {
  	const minions = [];
  	for (let i = 0; i < 5; i++) {
  		minions.push({id: i, attack: 5 - i, health: i + 5});
  	}

    return (
      <div className="minions" style={style}>
        {minions.map(minion => (<Minion key={minion.id} health={minion.health} attack={minion.attack} />))}
      </div> 
    );
  }
}

export default Minions;