import React from "react";
import QuoteList from "../components/quotes/QuoteList";
import QuoteDetail from "./QuoteDetail";

const Dummy = [
  { id: 1, author: "Sten", text: "Learning React is fun" },
  { id: 2, author: "Max", text: "Learning React is great" },
];
const AllQuotes = () => {
  return <QuoteList quotes={Dummy} />;
};

export default AllQuotes;
