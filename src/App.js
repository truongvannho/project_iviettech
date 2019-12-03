import React from 'react';
import './App.css';
import Header from './component/header';
import Home from './component/home';
import Footer from './component/footer';
import List from './component/listItem';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
      {/* <List/> */}
    </div>
  );
}

export default App;

