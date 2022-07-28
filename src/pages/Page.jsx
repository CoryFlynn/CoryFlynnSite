import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 810px;
  width: calc(100% - 32px);
  padding: 32px 16px;
`

const WholePage = styled.div`
  background: ${({ color }) => color ? color : 'white'};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export default function Page({children, color}) {
  return (
    <WholePage color={color}>
      <PageWrapper >
        {children}
      </PageWrapper>

    </WholePage>
  )
}
