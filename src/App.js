import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Home from './pages/home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Monitoring from './pages/monitoring';
import Overview from './pages/overview';
 

function App() {
  return (
    <div className="App">
  <Header></Header>
     <Router>
     
      <Route path="/" exact component={Home}/>
      <Route path="/monitoring" exact component={Monitoring}/>
      <Route path="/overview" exact component={Overview}/>
     </Router>
  <Footer></Footer>
     
      
    </div>
  );
}

export default App;
