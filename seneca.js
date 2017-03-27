/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function isValidEmail(email) {
  // TODO: needs to be implemented fully
  if(typeof email !== 'string'){
  	return false;
  }
  const emailValidation = /^[^ ]*@myseneca.ca$|senecac.on.ca$|senecacollege.ca$/;
  return emailValidation.test(email);
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function formatSenecaEmail(name) {
  // TODO: needs to be implemented fully
  if(name === null){
  	throw new Error('Name cannot be null');
  }else if(!(/^\w+$/.test(name))){
  	throw new Error('Name cannot have whitespace');
  }
  return name.concat('@myseneca.ca');
};
