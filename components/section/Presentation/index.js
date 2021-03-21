import React from 'react'
import { Container, Typography } from "../../index"
import { Image } from "./styled"
import { styleConfig as style, lightenOrDarkenColor } from "../../../styles"

function Presentation() {
  return (
    <Container center width="100%" height="100vh" bg={style.colors.primary} padding="2rem">
      <Container horizontal="650px" gap="clamp(2rem, 6vw, 5rem)">
        <Image
          src="https://images.unsplash.com/photo-1551780165-f2a8e6d86eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
        />
        <Container vertical left color="white" maxwidth="520px" gap="3rem">
          <Typography Tag="h2" size="clamp(1.7rem, 5vw, 3rem)">Hey, I'm John</Typography>
          <Typography 
            Tag="p" 
            size="clamp(.7rem, 2vw, 1rem)" lineheight="1.8" 
            color={lightenOrDarkenColor("#ffffff", -50)}
          >
            I'm a photograph, designer and skater. I love art and building new things.
            I build memorable experiences to help people better communicate with their clients.
          </Typography>
        </Container>
      </Container>
    </Container>
  )
}

export default Presentation
