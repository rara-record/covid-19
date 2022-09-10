import React from "react";

interface Props {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const GlobalInfo = ({ newConfirmed, newDeaths, newRecovered }: Props) => {
  return (
    <div>
      <h1>Global Covid-19 data</h1>
      <h2>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}</h2>
      <h2>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h2>
      <h2>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h2>
    </div>
  );
};

export default GlobalInfo;
