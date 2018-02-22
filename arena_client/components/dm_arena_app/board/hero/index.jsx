import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  height: '33.33%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const portraitStyle = {
	height: '80%',
	width: '20%',
	backgroundColor: '#42cef4',
	borderRadius: '50%',
	border: '4px solid black'
}

class Hero extends React.Component {
	componentDidMount() {
    const $this = $(ReactDOM.findDOMNode(this));
    const $portrait = $this.find('.portrait');

    // 1:1 aspect ratio (can't do with css cause width needs to be set instead of height).
    $portrait.width($portrait.outerHeight());
  }
  render() {
    return (
      <div className="hero" style={style}>
        <div className="portrait" style={portraitStyle}></div>
      </div> 
    );
  }
}

export default Hero;