import React from "react"
import { render, cleanup } from "@testing-library/react"
import Hero from "./index"

afterEach(() => {
  cleanup()
})

describe("Hero component", () => {
  it("should render texts correctly", () => {
    const { queryByText } = render(<Hero />)
    expect(queryByText("I design unforgatable experiences")).not.toBeNull()
    expect(queryByText("Some random webdesigner*")).not.toBeNull()
  })
})