import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
        <p>Hello World</p>
     <Footer></Footer>
      
    </div>
  );
}

export default App;
