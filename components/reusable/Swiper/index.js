import React, { useState, useEffect } from 'react'
import { Swiper } from "./styled"

function Swiper_() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const onScroll = () => { 
    setScrollPercentage(parseInt((window.scrollY + document.documentElement.clientHeight) * 100 / document.body.scrollHeight))
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  
  return (
    <Swiper scrollPercentage={scrollPercentage} />
  )
}

export default Swiper_
