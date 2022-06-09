import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Links from '../components/Links';
import Page from './Page';

const TopBar = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`

export default function Home () {
  const[time, setTime] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1)
    }, 1000)
  }, [time])

  return (
    <Page>
      <TopBar>
        <Title />
        <Links />
      </TopBar>
    </Page>
  )
}
