const hadron = require('@brainhubeu/hadron-core').default;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const config = require('./config');

const port = process.env.PORT || 8080;

const dependencies = [
  require('@brainhubeu/hadron-express'),
  require('@brainhubeu/hadron-validation'),
  require('@brainhubeu/hadron-typeorm'),
  require('@brainhubeu/hadron-events'),
];

hadron(app, dependencies, config).then(() => {
  app.listen(port, () =>
    // eslint-disable-next-line no-console
    console.log(`Listening on http://localhost:${port}`),
  );
});
