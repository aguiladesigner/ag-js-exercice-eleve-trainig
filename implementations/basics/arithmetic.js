/**
 * Fonction qui retourne la somme de deux nombres
 * @param {Integer} a le premier nombre
 * @param {Integer} b le deuxième nombre
 * @returns {Integer} la somme des deux nombres
 * @example
 * add(2, 3) // 5
 * add(-2, -3) // -5
 * add(2, -3) // -1
 */
function add(a, b) {
  // Ton implementation
  //return null;
  return a+b;
}

/**
 * Fonction qui retourne la soustraction de deux nombres
 * @param {Integer} a le premier nombre 
 * @param {Integer} b le deuxième nombre
 * @returns {Integer} la soustraction des deux nombres
 * @example
 * sub(2, 3) // -1
 * sub(-2, -3) // 1
 * sub(2, -3) // 5
 */
function sub(a, b) {
  // Ton implementation
 // return null;
 return a-b;
}

/**
 * Fonction qui retourne la multiplication de deux nombres
 * @param {Integer} a le premier nombre
 * @param {Integer} b le deuxième nombre
 * @returns {Integer} la multiplication des deux nombres
 * @example
 * mul(2, 3) // 6
 * mul(-2, -3) // 6
 * mul(2, -3) // -6
 * mul(2, 0) // 0
 */
function mul(a, b) {
  // Ton implementation
  //return null;
  return a*b;
}

/**
 * Fonction qui retourne la division de deux nombres
 * @param {Integer} a le premier nombre
 * @param {Integer} b le deuxième nombre
 * @returns {Integer} la division des deux nombres
 * @example
 * div(6, 3) // 2
 * div(-6, -3) // 2
 * div(6, -3) // -2
 * div(6, 0) // Error
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/throw
 */
function div(a, b) {
  // Ton implementation
  //return null;
    if (b === 0) {
      throw new Error("Division par zéro n'ai pas possible");
    }
    return a / b;
  }
  


module.exports = {
  add,
  sub,
  mul,
  div,
};