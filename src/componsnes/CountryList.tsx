import React from "react";
import styled from "@emotion/styled";
import { Country } from "../types/type";

interface Props {
  countries: Country[];
}

const CountryList: React.FC<Props> = ({ countries }) => {
  return (
    <ListWrapper>
      {countries?.map((country) => (
        <ListItem key={country.ID}>
          <ListContent>
            <div>
              <h3>{country.Country}</h3>
              <div>New Confirmed: {country.NewConfirmed}</div>
              <div>New Deaths: {country.NewDeaths}</div>
              <div>New Recovered {country.NewRecovered}</div>
            </div>
          </ListContent>
        </ListItem>
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

const ListContent = styled.div`
  background-color: #f7f7f7;
  margin: 5px;
  padding: 10px 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;

  @media (min-width: 420px) {
    flex: 0 0 33.33%;
  }
`;
