import React, { useState } from "react";
import styled from "@emotion/styled";
import { Country } from "../types/type";

interface Props {
  country: Country;
  onCountryClick: (country: Country) => void;
}

interface ListContentProps {
  isActive: boolean;
}

const CountryItem: React.FC<Props> = ({ country, onCountryClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClickItem = (country: Country) => {
    onCountryClick(country);
    setIsActive((isActive) => !isActive);
  };

  return (
    <ListItem onClick={() => handleClickItem(country)}>
      <ListContent isActive={isActive}>
        <div>
          <h3>{country.Country}</h3>
          <div>New Confirmed: {country.NewConfirmed}</div>
          <div>New Deaths: {country.NewDeaths}</div>
          <div>New Recovered {country.NewRecovered}</div>
        </div>
      </ListContent>
    </ListItem>
  );
};

export default CountryItem;

const ListContent = styled.div<ListContentProps>`
  background-color: ${(props) =>
    props.isActive ? "rgba(30,28,157,0.23)" : "#f7f7f7"};
  margin: 5px;
  padding: 10px 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;
  cursor: pointer;

  @media (min-width: 420px) {
    flex: 0 0 33.33%;
  }
`;
