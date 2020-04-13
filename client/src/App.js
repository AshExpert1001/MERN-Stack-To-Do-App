import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>      
      <div className="App">
          <Navbar/>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
