/* eslint-disable no-console */
function canIterate(obj) {
  if (obj === null || ['boolean', 'number', 'undefined'].includes(typeof obj)) {
    return false;
  }

  if (typeof obj === 'string') {
    return true;
  }

  return Symbol.iterator in obj;
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(true)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
console.log(canIterate([])); // true
