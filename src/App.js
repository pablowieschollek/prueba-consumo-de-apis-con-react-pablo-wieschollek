import React, {useState, useEffect} from 'react';
import './App.css';
import { Header } from './components/Header';
import { Miapi } from './components/Miapi';
import { Footer } from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
 
  
  return (

    <div>
        <Header/>
        <Miapi/>
        <Footer/>
    </div>

    
  );
}

export default App;
