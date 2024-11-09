import React from "react";
import reactLogo from './react.svg'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div id="fmain">
        <div id="proxyID"></div>
      </div>
      <footer>
        <div id="last">
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logoreact" alt="React logo" />
            </a>
        </div>
        <center>
        <h1>React</h1>
        <h2>The library for web and native user interfaces</h2>
        </center>
      </footer>
    </>
  );
};
export default Footer;
