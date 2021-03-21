// {
//   "presets": [
//     "next/babel",
//     "@babel/preset-env",
//     "@babel/preset-react"
//   ],
//   "plugins": [["styled-components", { "ssr": true }]]
// }

module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		"next/babel",
		"@babel/preset-react",
	],
	plugins: [["styled-components", { ssr: true }]],
}
