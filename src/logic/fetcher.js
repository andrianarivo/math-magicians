import axios from 'axios';

const getQuote = () =>
  axios
    .get('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'n2t/8yqdeaC7dI3ixfMZrg==eUDC0vklI6xxXo6k',
      },
    })
    .then((res) => res.data);

export default getQuote;
