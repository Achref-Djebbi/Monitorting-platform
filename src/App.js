import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <body>
        <h1><i>Welcome to the monitoring platform</i></h1>

         <button class="button ">Monitoring Rapport</button>
         <button class="button ">Systems overview</button>
      </body>
      <Footer></Footer>
     
      
    </div>
  );
}

export default App;
