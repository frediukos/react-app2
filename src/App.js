import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const topMenu = ['About', 'Video', 'Pictures', 'Shop', 'Contacts'];
  const footerMenu = ['About', 'Shop', 'Contacts'];
  return (
    <div className="App">
      <Header topMenu={topMenu}/>
      <Body/>
      <Footer footerMenu={footerMenu}/>
    </div>
  );
}

export default App;
