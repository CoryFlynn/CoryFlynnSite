import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;
`

const Link = styled.button`
  color: black;
  margin: 5px 6px 0px 6px;
  font-size: 16px;
`

const ExtLink = styled.a`
  color: black;
  margin: 5px 6px 0px 6px;
  font-size: 16px;
  text-decoration: underline;
`

export default function Links({toggleShowResume}) {
  return (
    <Wrapper>
      {/* <MyLink to="/portfolio">
        Portfolio
      </MyLink> */}
      {/* <Link onClick={toggleShowResume}>
        Resume
      </Link> */}
      <ExtLink href="/CFlynn_Resume2022.pdf">
        Resume
      </ExtLink>
      <ExtLink href="mailto:Flynn.CoryJ@gmail.com" rel="noopener noreferrer">
        Email
      </ExtLink>
      <ExtLink href="https://github.com/CoryFlynn" rel="noopener noreferrer">
        Github
      </ExtLink>
    </Wrapper>
  )
}
