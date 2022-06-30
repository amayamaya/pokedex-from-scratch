import React from 'react';
import { useState } from 'react';
import { getYelp } from './services/fetch-utils';

export default function YelpSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);

  async function fetchAndStoreBusinesses() {
    const data = await getYelp(yelpQuery);

    setBusinesses(data.businesses);
  }

  async function handleYelpSubmit(e) {
    e.preventDefault();

    await fetchAndStoreBusinesses();
    setYelpQuery('');
  }

  return (
    <div>
      <div className="yelp-search">
        <form onSubmit={handleYelpSubmit}>
          <input onChange={(e) => setYelpQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {businesses.map((business, i) => (
          <div key={business.name + i} className="business">
            <p>{business.name}</p>
            <img src={business.image_url} />
          </div>
        ))}
      </div>
    </div>
  );
}
