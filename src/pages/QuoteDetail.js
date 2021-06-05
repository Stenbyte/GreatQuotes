import React, { Fragment } from "react";
import Comments from "../components/comments/Comments";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy = [
  { id: "q1", author: "Sten", text: "Learning React is fun" },
  { id: "q2", author: "Max", text: "Learning React is great" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = Dummy.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No data</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
