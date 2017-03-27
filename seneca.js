exports.isValidEmail = function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  const emailValid = /^[^ ]*@myseneca.ca$|senecac.on.ca$|senecacollege.ca$/;
  return emailValid.test(email);
};

exports.formatSenecaEmail = function formatSenecaEmail(name) {
  if (name === null) {
    throw new Error('Name cannot be null');
  } else if (!(/^\w+$/.test(name))) {
    throw new Error('Name cannot have whitespace');
  }
  return name.concat('@myseneca.ca');
};
