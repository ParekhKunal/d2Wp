import React from "react";
import './Footer.css'
function Footer(props) {
  return (
    <div>
      <div class="footer">
        {props.copyright}
        <strong>{props.info}</strong>.
      </div>
    </div>
  );
}

export default Footer;
