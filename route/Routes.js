const Db = require("../models/db.js");
const model = require("../models/model.js");

// dato da query: req.query.studentid
// dato da path:  req.params.id
// dato da body:  req.body.studentId

//astronauts

exports.getAllAstronauts = function(req, res) {
	console.log("\nfunzione getAllAstronauts");
	var all = Db.getAll();
	if(req.query.lastName !== undefined){
		var cognome = req.query.lastName;
		var list = [];
		for(i = 0; i < all.length; i++){
			if(all[i]['lastName'] == cognome){
				list.push(all[i]);
			}
		}

		if(list.length==0){
			return res.json({message: 'Lastname non trovato'});
		}else{
			return res.json(list);
		}
	} else {
		return(res.json(all));
	}
	
};

exports.sendAstronauts = function (req, res) {
	console.log("\nfunzione sendAstronauts");
	var new_id = Db.length();
	var new_obj;

	astronautsID = new_id;
	firstName = req.body.firstName;
	lastName = req.body.lastName;
	isInSpace= req.body.isInSpace;
 	new_obj = new model(astronautsID, firstName, lastName, isInSpace);

 	console.log("add NODE: " + JSON.stringify(new_obj));
	Db.insert(new_obj);
	return res.sendStatus(200);
};

//astronauts/:id

exports.getAstronautsById = function(req, res) {
	console.log("\nfunzione getAstronautsById");
	var id = req.params.id;
	var element = Db.getById(id);
	if (element !== undefined){
		element = [element]
		return res.json(element);
	} else {
		return res.sendStatus(400);
	}
};

exports.updateAstronautsById = function(req, res) {	
	console.log("\nfunzione updateAstronautsById");
	var id = req.params.id;
	//console.log("id: " + id);
	var found = Db.getById(id);
	if (found !== undefined){
		firstName = req.body.firstName;
		lastName = req.body.lastName;
		isInSpace= req.body.isInSpace;
		obj = new model(id, firstName, lastName, isInSpace);
		//console.log(JSON.stringify(obj))
		Db.updateById(id, obj);
		return res.json({message: 'Astronaut ' + id + ' aggiornato'});
	} else {
		return res.json({message: 'Astronaut non trovato'});
	}
};