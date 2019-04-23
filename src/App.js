import React, { Component } from 'react';
import store from './store';
import setTech from './actions';

class App extends Component {

  dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTech(tech));
  }

  render() {
    const state = store.getState();
    return (
      <div>
        Today we will learn <b>{state.lang}</b>
        <br />
        <button data-tech="redux" key="btn-1" onClick={this.dispatchBtnAction.bind(this)}>Redux</button>
        <button data-tech="mobx" key="btn-2" onClick={this.dispatchBtnAction.bind(this)}>MobX</button>
      </div>
    );
  }
}

export default App;