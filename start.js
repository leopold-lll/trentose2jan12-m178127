/*
    Project: esame 12/01/2018 Ingegneria del Software 2
    Author: stefano.leonardi-2@studenti.unitn.it
*/

const express       = require("express"),
	app               = express(),
	bodyParser        = require("body-parser"),
	Router  = express.Router(),
	Routes  = require("./route/Routes.js")


// Body-parser (To parse the request body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routig prefix
app.use("/astronauts", Router);

// routing
Router.route('/')
  .get(Routes.getAllAstronauts)
  .post(Routes.sendAstronauts);

Router.route('/:id')
  .get(Routes.getAstronautsById);/*
  .put(Routes.updateAstronautsById);*/


// Set the port number
app.set("port", process.env.PORT || 3000);

// Start the service
app.listen(app.get("port"), function(){
  console.log("Sample node server Started @ " + new Date() + " Running on port no: " + app.get("port"));
});

