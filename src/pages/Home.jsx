import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Links from "../components/Links";
import Page from "./Page";
import Resume from "./Resume";

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 620px;
  padding: 0 24px;
  margin: 0 auto;
`;

const ContentTop = styled.div`
  padding: 50px 0px 30px 0px;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const ContentBottom = styled.div`
  padding: 20px 0px 50px 0px;
`;

const Body = styled.div`
  display: inline-flex;
  margin: 0 auto 20px;
  max-width: 700px;
  padding: 0 24px;
  transform: translateX(-40px);

  @media (max-width: 768px) {
    display: block;
    max-width: 620px;
    margin: 0 auto 30px;
    transform: none !important;
  }
`;

const SubTitle = styled.div`
  width: 100px;
  text-align: right;
  padding-top: 2px;
  padding-right: 30px;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;

    padding-bottom: 8px;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  text-align: left;
`;

const SubHeader = styled.div`
  width: 100px;
  text-align: right;
  padding-top: 2px;
  margin-left: 15px;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 768px) {
    text-align: left;
    width: 100%;
    margin-left: 25px;
  }
`;

const SubHeadText = styled.span`
  font-size: 20px;
  font-weight: bold;
  opacity: 0.9;
`;

const SubProject = styled.span`
  opacity: 0.5;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  const toggleShowResume = () => setShowResume(!showResume);

  return (
    <Page>
      <TopBar>
        <Title />
        <Links toggleShowResume={toggleShowResume} />
      </TopBar>
      {showResume ? (
        <Resume />
      ) : (
        <>
          <ContentTop>
            <Body>
              <SubTitle>
                <SubText>About</SubText>
              </SubTitle>
              <SubDesc>
                <SubDescText>
                  I've been studying and working as software developer since
                  2016. I began my career working on interfaces for
                  pharmaceutical devices, but shortly transitioned into working
                  in the crypto space. I have always been fascinated by the
                  posssibilities provided by distributed systems. I am thrilled
                  to be working on many different crypto projects currently.
                </SubDescText>
              </SubDesc>
            </Body>
            <Body>
              <SubTitle>
                <SubText>Interests</SubText>
              </SubTitle>
              <SubDesc>
                <SubDescText>
                  Distributed Systems, Atmospheric and Oceanographic Science,
                  Music Theory, Finance
                </SubDescText>
              </SubDesc>
            </Body>
          </ContentTop>
          <HeadContainer>
            <SubHeader>
              <SubHeadText>Projects</SubHeadText>
            </SubHeader>
          </HeadContainer>
          <ContentBottom>
            <Body>
              <SubTitle>
                <SubProject
                  onClick={() =>
                    window.open("https://app.zap.org/nft-marketplace", "_blank")
                  }
                >
                  Zap NFT Marketplace
                </SubProject>
              </SubTitle>
              <SubDesc>
                <SubDescText>
                  An NFT platform built to simplify the monetization of content.
                  Connected users to the Zap Media, Market, Auction House, and
                  Master contracts. Lens api was also used to allow users to
                  personalize a profile on the platform.
                </SubDescText>
              </SubDesc>
            </Body>
            <Body>
              <SubTitle>
                <SubProject
                  onClick={() => window.open("https://opendoors.la/", "_blank")}
                >
                  Open Doors
                </SubProject>
              </SubTitle>
              <SubDesc>
                <SubDescText>
                  Open Doors is a media collective run by my good friend Ryan
                  Frizelle. OpenDoors.la was built with the founding principles
                  of the collective in mind, namely that music brings people
                  together. Over the course of the coronavirus pandemic, the
                  website was used to live stream concert sets from artists all
                  over the world. These streams would bring in hundreds of
                  viewers.
                </SubDescText>
              </SubDesc>
            </Body>
            <Body>
              <SubTitle>
                <SubProject
                  onClick={() =>
                    window.open("https://cybershrooms.org/", "_blank")
                  }
                >
                  Cyber Shrooms
                </SubProject>
              </SubTitle>
              <SubDesc>
                <SubDescText>
                  Cyber Shrooms was an NFT project built to draw light on the
                  use of psciloscybin for treating a variety of mental disorders
                  in a clinical setting. The smart contract itself was built on
                  Solana using MetaPlex's Candy Machine, while the website uses
                  babylon.JS to display an interactive rendering of the NFT. The
                  NFT's themselves are listed on the Magic Eden marketplace.
                </SubDescText>
              </SubDesc>
            </Body>
            <Body>
              <SubTitle>
                <SubProject
                  onClick={() =>
                    window.open("https://app.zap.org/pricefeed", "_blank")
                  }
                >
                  Zap Oracles
                </SubProject>
              </SubTitle>
              <SubDesc>
                <SubDescText>
                  Price feed oracles for forex and crypto currency prices. Smart
                  contracts set up to retrieve the most up to date prices when
                  prompted via tip by user. Also created an SDK to provide
                  developers with an interface to easily interact with the
                  contracts.
                </SubDescText>
              </SubDesc>
            </Body>
          </ContentBottom>{" "}
        </>
      )}
    </Page>
  );
}
