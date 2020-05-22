import React from 'react';
import '../App.css';
import TopMenu from "./TopMenu";

function Header(props) {

  const add = () => {
    console.log('ADD')
    props.attempt('tuna')
  }

  return (
    <div>
      <TopMenu topMenu={props.topMenu}/>
      <button onClick={add}>Add </button>
    </div>
  );
}

export default Header;
