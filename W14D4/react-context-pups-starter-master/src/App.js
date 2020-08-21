import React from 'react';
import speedy from './pups/speedy-pup.jpg'
import banana from './pups/banana-pup.jpg'
import sleepy from './pups/sleepy-pup.jpg'
import PupContext from './PupContext';
import PupFormWithContext from './PupForm';

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      puppyType: banana,
      updateContext: this.updateContext
    }
  }

  updateContext = (puppyType) => {
    this.setState({ puppyType });
  }

  render() {
    return (
      <PupContext.Provider value={this.state}>
        <App puppyType={this.state.puppyType}/>
      </PupContext.Provider>
    )
  }


}


function App(props) {
  const {puppyType} = props;
  return (
    <div id="app">
      <PupFormWithContext/>
      <img src={puppyType} alt="pup"></img>
    </div>
  );
}

export default AppWithContext;
