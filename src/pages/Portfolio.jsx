/* import React from "react";
import styled from "styled-components";
import Page from "./Page";

const TopBar = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

const Content = styled.div`
  padding: 50px 0;
`;

const Body = styled.div`
  display: inline-flex;
  margin: 0 auto 20px;
  max-width: 700px;
  padding: 0 24px;
  transform: translateX(-40px);

  @media (max-width: 768px) {
    max-width: 620px;
    margin: 0 auto 30px;
    transform: none !important;
  }
`;

const SubTitle = styled.div`
  width: 80px;
  text-align: right;
  padding-top: 2px;
  padding-right: 30px;
  display: inline-block;
  vertical-align: top;
`;

const SubText = styled.span`
  opacity: 0.5;
  font-size: 18px;
`;

const SubDescText = styled.span`
  font-size: 18px;
`;

const SubDesc = styled.div`
  width: calc(100% - 80px);
  display: inline-block;
  vertical-align: top;
  text-align: left;
`;

export default function Portfolio() {
  return (
    <Page>
      <TopBar>Portfolio</TopBar>
      <Content>
        <Body>
          <SubTitle>
            <SubText>Zap NFT Marketplace</SubText>
          </SubTitle>
          <SubDesc>
            <SubDescText>
              An NFT platform built for Zap Protocol. Connected users to the Zap
              Media, Market, Auction House, and Master contracts.
            </SubDescText>
          </SubDesc>
        </Body>
        <Body>
          <SubTitle>
            <SubText>Open Doors</SubText>
          </SubTitle>
          <SubDesc>
            <SubDescText>
              Open Doors is a media collective run by my good friend Ryan
              Frizelle. OpenDoors.la was built with the founding principles of
              the collective in mind, namely that music brings people together.
              Over the course of the coronavirus pandemic, the website was used
              to live stream concert sets from artists all over the world. These
              streams would bring in hundreds of viewers.
            </SubDescText>
          </SubDesc>
        </Body>
        <Body>
          <SubTitle>
            <SubText>CyberShrooms</SubText>
          </SubTitle>
          <SubDesc>
            <SubDescText>
              Cyber Shrooms was an NFT project built to draw light and furher
              support the fact that psciloscybin can be used to treaty a variety
              of mental disorders in a clinical setting. The smart contract
              itself was built on Solana using MetaPlex's Candy Machine, while
              the website uses babylon.JS to display an interactive rendering of
              the NFT. The NFT's themselves are listed on the Magic Ether
              marketplace.
            </SubDescText>
          </SubDesc>
        </Body>
      </Content>
    </Page>
  );
}
 */