import React from "react"
import styled, { css } from "styled-components"

const Container = ({ Tag = "div", children, ...props }) => <Tag {...props}>{children}</Tag>

const StyledContainer = styled(Container)`
  position: ${props => props.relative && "relative"};
  overflow: ${props => props.overflow};
  width: ${props => props?.width};
  max-width: ${props => props?.maxwidth};
  min-width: ${props => props?.minwidth};
  height: ${props => props?.height};
  max-height: ${props => props?.maxheight};
  min-height: ${props => props?.minheight};
  background: ${props => props.bg};
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => props.corner};
  box-shadow: ${props => props.shadow};
  display: flex;
  flex-direction: column;
  ${props => props.center && css`
    justify-content: center;
    align-items: center;
  `}
  ${props => props.horizontal && css`
    flex-direction: row;
    align-items: center;
  `}
  ${props => props.vertical && css`
    align-items: center;
  `}
  gap: ${props => props.gap};
  align-items: ${props => props.left && "flex-start"};
  align-items: ${props => props.right && "flex-end"};
  list-style: none;
  user-select: ${props => props.noselect && "none"};

  ${props => props.horizontal && css`
    @media (max-width: ${props => props.horizontal}) {
      flex-direction: column;

      &>:first-child {
        margin-bottom: 3rem;
      }
    }
  `}
`

export default StyledContainer