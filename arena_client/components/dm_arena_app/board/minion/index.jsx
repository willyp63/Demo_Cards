import React from 'react';

const style = {
  height: '120px',
  width: '80px',
  backgroundColor: 'gray',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  borderRadius: '50%',
};

const healthStyle = {
	position: 'absolute',
	bottom: '4px',
	left: '4px',
  height: '32px',
  width: '32px',
  borderRadius: '50%',
  backgroundColor: 'red',
  textAlign: 'center',
  lineHeight: '32px',
};

const attackStyle = {
  position: 'absolute',
	bottom: '4px',
	right: '4px',
  height: '32px',
  width: '32px',
  borderRadius: '50%',
  backgroundColor: 'yellow',
  textAlign: 'center',
  lineHeight: '32px',
};

const imageStyle = {
  width: '64px',
  height: '64px',
  backgroundColor: 'white',
  borderRadius: '50%',
  marginTop: '12px',
  border: '2px solid black',
};

class Minion extends React.Component {
  render() {
  	const { health, attack } = this.props;

    return (
      <div className="minion" style={style}>
        <div className="image" style={imageStyle}></div>
        <div className="health" style={healthStyle}>{health}</div>
        <div className="attack" style={attackStyle}>{attack}</div>
      </div> 
    );
  }
}

export default Minion;