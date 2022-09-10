import React, { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";
import GlobalInfo from "./componsnes/GlobalInfo";
import CountryList from "./componsnes/CountryList";
import { RespinseData } from "./types/type";

const App: React.FC = () => {
  const [data, setData] = useState<RespinseData | undefined>(undefined);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data: RespinseData = await result.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <CountryList countries={data?.Countries} />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default App;
