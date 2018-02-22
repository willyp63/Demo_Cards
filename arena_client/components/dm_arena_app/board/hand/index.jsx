import React from 'react';

import Card from '../card';

const style = {
  height: '33.33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
};

class Hand extends React.Component {
  render() {
  	const { showing } = this.props;

  	const cards = [];
  	for (let i = 0; i < 7; i++) {
  		cards.push({id: i});
  	}

    return (
      <div className="hand" style={style}>
        {cards.map(card => (<Card key={card.id} showing={showing} />))}
      </div> 
    );
  }
}

export default Hand;