import styled from "styled-components"
import { Container } from "../../index"
import { animations } from "../../../styles"

export const HeroContainer = styled(Container)`
  z-index: 1;
  transition: .3s all;
  overflow: hidden;
  outline: 1px solid white;

  &:hover {
    outline-offset: 2rem;
  }
  

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    background: white;
    transform: translateY(100%);
    transition: .3s all;
    z-index: -1;
  }

  &:hover {
    color: black;
  }

  &:hover::after {
    transform: translateY(0);
  }
`

export const CtaArrow = styled.span`
  cursor: pointer;
  border: solid transparent;
  border-width: 10px 20px;
  border-top-color: white;
  position: absolute;
  bottom: 1rem;
  opacity: .3;
  animation: ${animations.pulse} 1.4s infinite ease;
  transition: all .3s;

  &:hover {
    opacity: .8;
  }
`