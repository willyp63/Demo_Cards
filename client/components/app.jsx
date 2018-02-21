import React from 'react';
import { Route } from 'react-router-dom';

import HomeRoute from './routes/home';

class App extends React.Component {
  render() {
    return (
      <div className="dm-app">
        <span>Demo Cards</span>
        <div className="route">
          <Route exact path="/" component={HomeRoute} />
        </div> 
      </div> 
    );
  }
}

export default App;