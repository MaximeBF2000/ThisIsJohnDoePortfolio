import React from 'react'
import { Container, Typography } from "../../index"
import { HeroContainer, CtaArrow } from "./styled"
import { styleConfig as style } from "../../../styles"

function Hero() {
  const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior : "smooth"})

  return (
    <Container 
      center relative noselect
      width="100%" height="100vh" padding="2rem"
      bg={style.colors.primary} color={style.colors.white}
    >
      <HeroContainer relative padding="2rem" right overflow="hidden">
        <Typography Tag="h1" size="clamp(1.4rem, 4vw, 2rem)" margin="0 0 2rem 0">
          I design unforgatable experiences
        </Typography>
        <Typography Tag="h3" size="clamp(.9rem, 3vw, 1.2rem)" weight="normal" italic="true">
          Some random webdesigner*
        </Typography>
      </HeroContainer>
      <CtaArrow onClick={scrollDown} />
    </Container>
  )
}

export default Hero
