import React from "react";
import styled from "@emotion/styled";

interface Props {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const GlobalInfo: React.FC<Props> = ({
  newConfirmed,
  newDeaths,
  newRecovered,
}) => {
  return (
    <Wrapper>
      <h1>Global Covid-19 Data</h1>
      <InfoWrapper>
        <h2>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}</h2>
        <h2>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h2>
        <h2>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h2>
      </InfoWrapper>
    </Wrapper>
  );
};

export default GlobalInfo;

const Wrapper = styled.div`
  padding: 10px 0;
  text-align: center;

  & h1 {
    font: bold 45px/1 "arial";
    padding: 10px 0;
    color: #1e1c9d;
  }
`;

const InfoWrapper = styled.div`
  & h2 {
    font: bold 22px/1 "arial";
  }
`;
