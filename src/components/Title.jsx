import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: linear-gradient(
    69deg,
    rgba(130, 171, 133, 1) 0%,
    rgba(0, 92, 30, 1) 100%
  );
  margin: -1px 8px 0px 0px;
  z-index: 1px;
`;

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileName = styled.span`
  font-size: 24px;
  font-weight: bold;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Title() {
  return (
    <Wrapper>
      <Circle />
      <Name> Cory Flynn </Name>
      <MobileName> CF </MobileName>
    </Wrapper>
  );
}
