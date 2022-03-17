const express = require('express'),

cors = require('cors');
//
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(cors());

//let the router use the app
app.set('port', process.env.PORT || 9000);
//

module.exports  = app;