import React from 'react';
import '../App.css';
import FooterMenu from "./FooterMenu";

function Footer(props) {
  return (
    <div>
      <FooterMenu footerMenu={props.footerMenu}/>
      <button onClick={() => props.attempt('Tilapia')}>Tilapia</button>
    </div>
  );
}

export default Footer;
