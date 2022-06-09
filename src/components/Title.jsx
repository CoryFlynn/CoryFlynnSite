import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;

`

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: linear-gradient(69deg, rgba(130,171,133,1) 0%, rgba(0,92,30,1) 100%);
  margin: -1px 8px 0px 0px;
  z-index: 1px;
`

const Line = styled.div`
  width: 16px;
  border-radius: 2px;
  height: 2px;
  background: lightgrey;
  top: ${({top}) => `${top}px`};
`

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
`

const LineWrap = styled.div` 
  position: relative;
  top: 12px;
  left: 8px
  z-index: 2;
`

export default function Title() {
  return (
    <Wrapper>
      <Circle/> 
      <Name> Cory Flynn </Name>
    </Wrapper>
  )
}
