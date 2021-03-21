import React from "react"
import { render } from "@testing-library/react"
import Presentation from "./index"

describe("Presentation component", () => {
  it("should render properly", () => {
    const { queryByText, container } = render(<Presentation />)
    expect(queryByText("Hey, I'm", { exact: false })).not.toBeNull()
    expect(container.querySelector("p")).not.toBeNull()
  })
})