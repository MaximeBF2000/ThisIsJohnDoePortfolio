import { keyframes } from "styled-components"

const animations = {
  pulse: keyframes`
    0%, 40%, 80%, 100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-7px);
    }
  `
}

export default animations