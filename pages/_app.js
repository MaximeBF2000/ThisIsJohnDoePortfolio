import React from "react"
import { GlobalStyle } from "../styles"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
      <GlobalStyle />
		</>
	)
}

export default MyApp
