import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const topMenu = ['About', 'Video', 'Pictures', 'Shop', 'Contacts'];
  const footerMenu = ['About', 'Shop', 'Contacts'];

  const fisher = (fish) => {
    console.log('PULL! ' + fish)
  }

  return (
    <div className="App">
      <Header topMenu={topMenu} attempt={fisher}/>
      <Body/>
      <Footer footerMenu={footerMenu} attempt={fisher}/>
    </div>
  );
}

export default App;
