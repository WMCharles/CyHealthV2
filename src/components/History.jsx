import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Graph from "./Graph";
import Form from "./Form";
import "../styles/History.css";

export default function History() {
  const [numbers, setNumbers] = useState([]);
  const [countries, setCountries] = useState([]);
  const continents = [
    "All",
    "Africa",
    "Asia",
    "Europe",
    "North-America",
    "South-America",
  ];
  const [selectedOption, setSelectedOption] = useState("all");
  const [date, setDate] = useState("2022-11-18");
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9d8eb4a4c2mshea1727c847e873bp124a0fjsn0e91deaa1675",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    fetch(
      `https://covid-193.p.rapidapi.com/history?country=${selectedOption}&day=${date}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNumbers(response.response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const fetchCountries = async () => {
    fetch("https://covid-193.p.rapidapi.com/countries", options)
      .then((response) => response.json())
      .then((response) => {
        setCountries(response.response);
      })
      .catch((err) => console.error(err));
  };

  // fetching countries
  useEffect(() => {
    fetchCountries();
  }, []);

  // fetching covid data
  useEffect(() => {
    if (selectedOption || date) {
      setLoading(true);
      fetchData();
    }
  }, [selectedOption, date]);

  const label = numbers.map((data) => data.time);
  const cases = numbers.map((data) => data.cases.new);
  const deaths = numbers.map((data) => data.deaths.new);
  const tests = numbers.map((data) => data.tests.total);

  return (
    <div className="History">
      <h1 className="mb-2">Covid-19 Hourly History</h1>
      <Form setDate={setDate} setSelectedOption={setSelectedOption} continents={continents} countries={countries} />
      {loading ? (
        <Loading />
      ) : (
        <Graph label={label} cases={cases} deaths={deaths} tests={tests} />
      )}
    </div>
  );
}
