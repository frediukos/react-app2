import React from 'react';
import '../App.css';
import FooterMenu from "./FooterMenu";

function Footer(props) {

  const change = (e) => {
    props.attempt(e.target.value)
  };

  return (
    <div>
      <FooterMenu footerMenu={props.footerMenu}/>
      <button onClick={() => props.attempt('Tilapia')}>Tilapia</button>
      <input type="text" onChange={change}/>
    </div>
  );
}

export default Footer;
