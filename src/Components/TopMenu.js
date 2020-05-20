import React from 'react';
import '../App.css';
import TopMenuItem from "./TopMenuItem";

function TopMenu(props) {
  return (
    <ul>
      {props.topMenu.map(el => <TopMenuItem key={el} item={el}/>)}
    </ul>
  );
}

export default TopMenu;
