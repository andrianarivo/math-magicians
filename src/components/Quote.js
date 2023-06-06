import { useEffect, useState } from 'react';
import styles from '../styles/Quote.module.css';
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
      <div className={styles.info}>
        <img src={loadingGif} alt="loading dog" />
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.info}>
        <img className="error-image" src={errorImage} alt="error" />
        <h3>Sorry, an error occurred!</h3>
      </div>
    );
  }

  return <h3 className={styles.quote}>{`"${data[0].quote}"`}</h3>;
}

export default Quote;
