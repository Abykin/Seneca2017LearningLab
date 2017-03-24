/**
 * Checks if email is valid
 */
exports.isValidEmail = function isValidEmail(email) {
  return /@myseneca.ca$/.test(email);
};

/**
 * Formats name into a valid seneca email
 */
exports.formatSenecaEmail = function (name) {
  return name.concat('@myseneca.ca');
};
