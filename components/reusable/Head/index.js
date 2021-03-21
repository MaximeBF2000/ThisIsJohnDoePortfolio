import React from 'react'
import Head from "next/head"

function Head_({ title, description, keywords, children }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.reduce((a, b) => a + (b && `, ${b}`), "")} />
      {children}
    </Head>
  )
}

Head_.defaultProps = {
  title: "Some random design Portfolio",
  description: "Découvrez mon univers de développeur front-end et designer UI / UX à travers mon portfolio",
  keywords: ["Portfolio", "Maxime FERRET", "Développeur React.js", "Développeur Frontend", "UI / UX"]
}

export default Head_
