
const palindromes = function (string) {

  const alphanumericalset = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const cleaned = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumericalset.includes(character))
    .join('');

  const rev = cleaned.split('').reverse().join('');

  return cleaned === rev;
};

// Do not edit below this line
module.exports = palindromes;
