import React, { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";
import GlobalInfo from "./componsnes/GlobalInfo";
import CountryList from "./componsnes/CountryList";
import { RespinseData, Country } from "./types/type";

const App: React.FC = () => {
  const [data, setData] = useState<RespinseData | undefined>(undefined);
  const [activeCountry, setActiveCountry] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data: RespinseData = await result.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCountryClick = (country: Country) => {
    setActiveCountry([...activeCountry, country]);
    console.log(activeCountry);
  };

  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: #f1f1f1;
            color: #222;
          }
        `}
      />

      {activeCountry.map((aCountry) => (
        <span>{aCountry.Country}</span>
      ))}

      {data ? (
        <>
          <GlobalInfo
            newConfirmed={data?.Global.NewConfirmed}
            newDeaths={data?.Global.NewDeaths}
            newRecovered={data?.Global.NewRecovered}
          />
          <CountryList
            countries={data?.Countries}
            onCountryClick={onCountryClick}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default App;
