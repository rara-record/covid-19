import React, { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";

import { RespinseData, Country } from "./types/type";

import GlobalInfo from "./componsnes/GlobalInfo";
import CountryList from "./componsnes/CountryList";
import BarChart from "./componsnes/BarChart";

const App: React.FC = () => {
  const [data, setData] = useState<RespinseData | undefined>(undefined);
  const [activeCountry, setActiveCountry] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data: RespinseData = await result.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCountryClick = (country: Country) => {
    // 아이템 인덱스 구하기
    const countryIndex = activeCountry.findIndex(
      (aCountry) => aCountry.ID === country.ID
    );

    // 아이템이 있는 경우
    if (countryIndex > -1) {
      const newActiveCounties = [...activeCountry];
      newActiveCounties.splice(countryIndex, 1); // 중복 제거
      setActiveCountry(newActiveCounties);
    } else {
      setActiveCountry([...activeCountry, country]);
    }
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

      {data ? (
        <>
          <GlobalInfo
            newConfirmed={data?.Global.NewConfirmed}
            newDeaths={data?.Global.NewDeaths}
            newRecovered={data?.Global.NewRecovered}
          />
          <hr />
          {activeCountry.length ? <BarChart countries={activeCountry} /> : null}

          <CountryList
            countries={data.Countries}
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
