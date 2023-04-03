const express = require ('express');
const router = require('./routersServer/sRouters.js')
const cors = require ('cors');
const App = express();

App.use(cors());
App.use(express.json());
App.use(router)

module.exports = App;