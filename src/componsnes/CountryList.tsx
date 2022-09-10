import React from "react";
import styled from "@emotion/styled";
import CountryItem from "./CountryItem";
import { Country } from "../types/type";

interface Props {
  countries: Country[];
  onCountryClick: (country: Country) => void;
}

const CountryList: React.FC<Props> = ({ countries, onCountryClick }) => {
  return (
    <ListWrapper>
      {countries?.map((country) => (
        <CountryItem
          key={country.ID}
          country={country}
          onCountryClick={onCountryClick}
        />
      ))}
    </ListWrapper>
  );
};

export default CountryList;

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
