import React from "react";

import "./style.css";
import facebook from "../../assets/facebook-logo.png";

function Header() {
  return (
    <div id="Header">
      <div className="Container">
        <img src={facebook} alt="Facebook Logo" />
        <div className="Perfil">
          <div>Meu perfil</div>
         <div className="Icon"><div className="Head"></div><div className="BodyUser"></div></div> 
        </div>
      </div>
    </div>
  );
}

export default Header;