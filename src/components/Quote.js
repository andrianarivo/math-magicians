import './Quote.css';
import { useEffect, useState } from 'react';
import getQuote from '../logic/fetcher';
import loadingGif from '../assets/loading.gif';
import errorImage from '../assets/error.png';

function Quote() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState({});

  useEffect(() => {
    getQuote()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((reason) => {
        setError(reason);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="info">
        <img src={loadingGif} alt="loading dog" />
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="info">
        <img className="error-image" src={errorImage} alt="error" />
        <h1>Sorry, an error occurred!</h1>
      </div>
    );
  }

  return <h1>{`"${data[0].quote}"`}</h1>;
}

export default Quote;
