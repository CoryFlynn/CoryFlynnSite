import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: inline-flex;
`

const MyLink = styled(Link)`
  color: black;
  margin: 4px 6px 0px 6px;
  font-size: 16px;
`

const ExtLink = styled.a`
  color: black;
  margin: 4px 6px 0px 6px;
  font-size: 16px;
  text-decoration: underline;
`

export default function Links() {
  return (
    <Wrapper>
      <MyLink to="portfolio" rel="noopener noreferrer">
        Portfolio
      </MyLink>
      <MyLink to="/resume" rel="noopener noreferrer">
        Resume
      </MyLink>
      <ExtLink href="mailto:Flynn.CoryJ@gmail.com" rel="noopener noreferrer">
        Email
      </ExtLink>
      <ExtLink href="https://github.com/CoryFlynn" rel="noopener noreferrer">
        Github
      </ExtLink>
      <ExtLink href="https://www.linkedin.com/in/cory-flynn-521137186/" rel="noopener noreferrer">
        LinkedIn
      </ExtLink>
    </Wrapper>
  )
}
