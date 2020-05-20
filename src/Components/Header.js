import React from 'react';
import '../App.css';
import TopMenu from "./TopMenu";

function Header(props) {
  return (
    <div>
      <TopMenu topMenu={props.topMenu}/>
    </div>
  );
}

export default Header;
