import React from "react"
import styled from "styled-components"

const Typography = ({ Tag = "div", children, ...props }) => <Tag {...props}>{children}</Tag>

const StyledTypography = styled(Typography)`
  width: ${props => props.width};
  max-width: ${props => props.maxwidth};
  min-width: ${props => props.minwidth};
  height: ${props => props.height};
  max-height: ${props => props.maxheight};
  min-height: ${props => props.minheight};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color || "inherit"};
  line-height: ${props => props.lineheight};
  font-style: ${props => props.italic && "italic"};
  user-select: ${props => props.noselect && "none" || "inherit"};
`

export default StyledTypography