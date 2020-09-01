import React, { Component } from 'react';

import Header from './Header';
import MainPage from './MainPage';
import './App.css';

class App extends Component {
  state = {
    selected: {},
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="App">
        <Header />
        <MainPage selected={selected} updateFeature={this.updateFeature} />
      </div>
    );
  }
}

export default App;
