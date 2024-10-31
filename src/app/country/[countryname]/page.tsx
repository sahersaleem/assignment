"use client";

import CountryCard from "@/components/CountryCard";
// import Link from "next/link";

interface ICountry {
  name: string;
  capital: string;
  population: number;
  languages: string[];
  currency: string;
}

const countries = [
  {
    name: "UnitedStates",
    capital: "Washington, D.C.",
    population: 331002651,
    languages: ["English"],
    currency: "USD",
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
    languages: ["English", "French"],
    currency: "CAD",
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 126476461,
    languages: ["Japanese"],
    currency: "JPY",
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: 83783942,
    languages: ["German"],
    currency: "EUR",
  },
  {
    name: "India",
    capital: "New Delhi",
    population: 1380004385,
    languages: ["Hindi", "English"],
    currency: "INR",
  },
];

const page = ({ params }: { params: any }) => {
  const findCountries = countries.find(
    (country: ICountry) => country.name === params.countryname
  );
  if (!findCountries) {
    return <p className="text-red-600 text-4xl"> Country Not found!</p>;
  }
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-white text-black">
      {findCountries && (
        // <div>
        //   <h1 className="text-5xl font-bold">{findCountries.name}</h1>
        //   <h2 className="text-2xl">Capital:{findCountries.capital}</h2>
        //   <h2 className="text-2xl">population:{findCountries.population}</h2>
        //   <h2 className="text-2xl">
        //     Languages:
        //     {findCountries.languages.map((language, index) => (
        //       <ul key={index}>
        //         <li className="text-lg">{language}</li>
        //       </ul>
        //     ))}
        //   </h2>

        //   <button className="bg-blue-800 px-3 py-2 text-white rounded-lg">
        //     <Link href={"/country"}>Back</Link>
        //   </button>
        // </div>

        // Task no 2
        <CountryCard
          countryName={findCountries.name}
          capital={findCountries.capital}
          languages={findCountries.languages}
          population={findCountries.population}
        />
      )}
    </div>
  );
};

export default page;
