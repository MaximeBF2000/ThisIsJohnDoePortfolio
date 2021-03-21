import styled from "styled-components"
import { styleConfig as style } from "../../../styles"

export const Swiper = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 10px;
  height: 40px;
  background: ${props => `linear-gradient(to top, white 0%, white ${props.scrollPercentage}%, transparent ${props.scrollPercentage}%, transparent 100%)`};
  opacity: .75;
  border-radius: 10px;
  border: solid 1px ${style.colors.white};
`