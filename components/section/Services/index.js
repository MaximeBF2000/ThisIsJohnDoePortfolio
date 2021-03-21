import React from 'react'
import { Container, Typography } from "../../index"
import { ServicesContainer } from "./styled"
import { styleConfig as style } from "../../../styles"

function Services() {
  return (
    <Container vertical width="100%" height="100vh" bg={style.colors.primary} color={style.colors.white} padding="5rem">
      <Typography Tag="h2" size="clamp(1.7rem,5vw,3rem)" margin="0 0 5rem 0">I'm basically obsessed with...</Typography>
      <ServicesContainer relative bg={style.colors.white} horizontal padding="3rem" gap="5rem" corner="10px" shadow="0 3px 15px #0B2B6B">
        <Container Tag="ul" color={style.colors.black} gap="1rem">
          <Typography Tag="li">Capturing moments to their most beautiful</Typography>
          <Typography Tag="li">Making moments memorables</Typography>
          <Typography Tag="li">Creating funny experiences</Typography>
          <Typography Tag="li">Designing efficient processes</Typography>
        </Container>
        <Container Tag="ul" color={style.colors.black} gap="1rem">
          <Typography Tag="li">Helping people grow their work</Typography>
          <Typography Tag="li">Networking with amazing individuals</Typography>
          <Typography Tag="li">Traveling the world & sharing my adventure</Typography>
          <Typography Tag="li">Living a life I will be proud of</Typography>
        </Container>
      </ServicesContainer>
    </Container>
  )
}

export default Services
