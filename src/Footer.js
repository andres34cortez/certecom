import React from "react";
import logo_white from "./assets/icons/logo_white.20ea2684.svg";
function Footer() {
  return (
    <footer>
      <div className="div__footer">
        <img className="footer__logo" src={logo_white} />
        <div className="footer__infor">
          <h4 className="footer__title">CONTACTO</h4>
          <p className="footer__text">6670-7474</p>
          <p className="footer__text">info@certecom.net</p>
          <p className="footer__text">
            4a calle, Cdad. de Guatemala, Guatemala
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
