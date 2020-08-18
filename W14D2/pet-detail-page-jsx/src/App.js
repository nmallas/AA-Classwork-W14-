import React from 'react';
import PetDetailPage from './petDetailPage';


function App(props) {
  return (
    <PetDetailPage pet={props.pet}></PetDetailPage>
  );
}

export default App;
