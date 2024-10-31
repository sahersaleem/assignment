// Second Task

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const CountryCard = ({
  countryName,
  capital,
  population,
  languages,
}: {
  countryName: string;
  capital: string;
  population: number;
  languages:string[]
  
}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{countryName}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col" >
          <h2>Capital : {capital}</h2>
          <h2>Population : {population}</h2>
         Languages: {languages.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CountryCard;
