import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const divStyleSocial = {
  color: "grey"
};

export default function SocialMedia() {
  return (
    <div>
      <a href="/">
        <FontAwesomeIcon style={divStyleSocial} icon={faInstagram} size="2x" />
        <FontAwesomeIcon style={divStyleSocial} icon={faFacebook} size="2x" />
        <FontAwesomeIcon
          style={divStyleSocial}
          icon={faEnvelopeSquare}
          size="2x"
        />
      </a>
    </div>
  );
}
