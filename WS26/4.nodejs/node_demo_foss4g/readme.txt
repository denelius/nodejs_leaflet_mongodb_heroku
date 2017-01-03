Heroku requires .env and Procfile

*** .env *** not critical
TIMES=2

*** Procfile ***
web: node index.js

*** package.json ***
{
  "name": "node-js-getting-started",
  "version": "0.2.5",
  "description": "A sample Node.js app using Express 4",
  "engines": {
    "node": "5.9.1"
  },
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "ejs": "2.4.1",
    "express": "4.13.3",
     "body-parser": "~1.8.1",
    "cookie-parser": "~1.3.3",
    "morgan": "~1.3.0",
    "serve-favicon": "~2.1.3",
    "debug": "~2.0.0",
    "pug": "*",
    "mongodb": "*",
    "mongoose": "*"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/heroku/node-js-getting-started"
  },
  "keywords": [
    "node",
    "heroku",
    "express"
  ],
  "license": "MIT"
}

*** index.js ***

*** app.json *** not critical