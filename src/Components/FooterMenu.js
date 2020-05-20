import React from 'react';
import '../App.css';
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu(props) {
  return (
    <ul>
      {props.footerMenu.map(el => <FooterMenuItem key={el} item={el}/>)}
    </ul>
  );
}

export default FooterMenu;
