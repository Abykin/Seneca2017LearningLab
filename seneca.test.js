// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for non string argument', function(){
  	var notString = 123;
  	expect(seneca.isValidEmail(notString)).toBe(false);
  });

  test('returns false for null argument', function(){
  	var nullChar = null;
  	expect(seneca.isValidEmail(nullChar)).toBe(false);
  });

  test('returns true for leading white space string argument', function(){
  	var leadingWhiteSpaces = '  someone@gmail.com';
  	expect(seneca.isValidEmail(leadingWhiteSpaces)).toBe(true);
  });

  test('returns true for proffesor style email address', function(){
  	var profEmail = 'david.humphrey@senecacollege.ca';
  	expect(seneca.isValidEmail(profEmail)).toBe(true);
  });

  test('returns true for old style email address', function(){
  	var oldEmail = 'david.humphrey@senecac.on.ca';
  	expect(seneca.isValidEmail(oldEmail)).toBe(true);
  });  

});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('return false if name contains wierd characters', function() {
    var name = "ms$@%haw";
    expect(seneca.formatSenecaEmail(name)).toBe('false');
  });

  test('returns false if name is null', function() {
    var name = null;
    expect(seneca.formatSenecaEmail(name)).toBe('false');
  });

});