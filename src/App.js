import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import View from './components/pages/View';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route path="/view" component={View}/>
        </div>
      </Router>
    );
  }
}

export default App;
