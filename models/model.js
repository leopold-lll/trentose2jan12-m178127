/*globals require, module */

// create a object astronauts
module.exports = function (astronautsID, firstName, lastName, isInSpace) {
  this.astronautsID = astronautsID;
  this.firstName 	= firstName;
  this.lastName 	= lastName;
  this.isInSpace 	= isInSpace;
};