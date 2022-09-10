import React, { useState, useEffect } from "react";

interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: unknown;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface GlobalData {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface RespinseData {
  Countries: Country[];
  Date: string;
  Global: GlobalData;
  ID: string;
  Message: string;
}

const App: React.FunctionComponent = () => {
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

  return <div>App</div>;
};

export default App;
