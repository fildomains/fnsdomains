import React from "react"
import styled from "@emotion/styled"
import logo from "../assets/fnsLogo.svg"
import logoText from "../assets/fnsLogoText.svg"

const LogoContainer = styled("div")`
  height: 48px;
  display: flex;

  img {
    display: block;
  }

  .ens-logo {
    width: 60px;
    margin-right: 0px;
  }

  .ens-logo-text {
    width: 67px;
  }
`

export default function Logo({ className }) {
  return (
    <LogoContainer className={className}>
      <img src={logo} alt="FNS Logo" className="ens-logo" />
      <img src={logoText} alt="FNS Logo text" className="ens-logo-text" />
    </LogoContainer>
  )
}
