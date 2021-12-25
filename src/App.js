import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,Actions,Romance, Horror} from './url'

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={Actions} title='Action' isSmall/>
      <RowPost url={Romance} title='Romance' isSmall/>
      <RowPost url={Horror} title='Horror' isSmall/>
      
    </div>
  );
}

export default App;
