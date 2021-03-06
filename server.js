const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();
const animalRoutes = require('./routes/animalRoutes');
const userRouter = require('./routes/userRoutes');
const yelpCall = require('./external/yelpCall');
const TokenService = require('./routes/auth/TokenService');
const {authRouter, AuthService} = require('./routes/auth/authRouter');

const PORT = process.env.PORT || 3001;

app.set('supersecret', process.env.SERVER_SECRET);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(TokenService.receiveToken);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/api/animals/', animalRoutes);
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.get('/api/yelp/:locale/', (req, res) => {
  yelpCall(process.env.IED, process.env.IET, req.params.locale)
/*
  returning the call to the data before the promise makes yelpCall 'promiseable'. Then we call the promise and error catch on the yelpCall. This gets the data and returns it to the browser side.
*/
    .then(shelter => {
      const siComp = shelter.jsonBody.businesses[0].location.city;
      const qbComp = shelter.jsonBody.businesses[6].location.city;

          if (siComp === 'Staten Island') {
          const results = shelter.jsonBody.businesses[0];
          console.log(results)

          res.json({
            message: 'ok',
            data: results
          })
        }
        else if (qbComp === 'Whitestone') {
          const results = shelter.jsonBody.businesses[6];
          console.log(results)

          res.json({
            message: 'ok',
            data: results
          })
        }
        else {
          const results = shelter.jsonBody.businesses[1];
          console.log(results)

          res.json({
            message: 'ok',
            data: results
          })
        }
    })

    .catch(err => {console.log(err);});
});

  app.get('*', (req, res) => {
    res.status(404).send({message: 'Oops! Maybe take a left in Sarasota?'})

})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}, in ${app.get('env')} mode.`);
}).on('error', console.error);
