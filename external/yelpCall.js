const yelp = require('yelp-fusion');

function yelpCall(id, secret, locale) {

  const searchRequest = {
    term: 'Animal Shelters',
    location: locale,
  };

/*
  return the authentication results for the yelp header
  first because It is needed for the retreival of the actual api data call.
*/
  return yelp.accessToken(id, secret)
    .then(res => {
      const client = yelp.client(res.jsonBody.access_token);
/*
  return the actual search method. Cut and moved the promise to server.js. It needed to me moved there because the result was not being returns at the server.js
*/
      return client.search(searchRequest)
/* .then(shelter => {
          const results = shelter.jsonBody.businesses[0];
          console.log(results)

    -promise here before. It was moved to the server.js because that is where we need the data.
*/
    })
    .catch(err => {console.log(err);})
}

module.exports = yelpCall
