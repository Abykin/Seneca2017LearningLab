/**
 * Checks if email is valid
 */
exports.isValidEmail = function (email) {
  if (email.includes('@myseneca.ca')){
    return true;
  }
  return false;
};

/**
 * Formats name into a valid seneca email
 */
exports.formatSenecaEmail = function (name) {
  return name.concat('@myseneca.ca');
};