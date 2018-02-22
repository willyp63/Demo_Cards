import React from 'react';

let style = {
  height: '120px',
  width: '80px',
  borderReadius: '4px',
  border: '2px solid black',
};

class Card extends React.Component {
  render() {
  	const { showing } = this.props;

  	style = Object.assign(style, {
  		backgroundColor: showing ? 'white' : 'gray',
  	});

    return (
      <div className="card" style={style}>
      </div> 
    );
  }
}

export default Card;