import styled from "styled-components"
import { Container } from "../../index"

export const ServicesContainer = styled(Container)`
  clip-path: circle(100px at 0 100%);
  transition: .4s all;

  &::before {
    content: "👉";
    font-size: 3rem;
    position: absolute;
    bottom: 0;
    right: calc(100% + 1.5rem);
  }

  &:hover {
    clip-path: circle(1000px at 0 100%);

    &::before {
      content: "👍";
    }
  }
`