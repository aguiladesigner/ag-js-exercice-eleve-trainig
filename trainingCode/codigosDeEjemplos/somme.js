/**
 * Somme des nombres de 1 à n en utilisant une bouble for
 * @param {Integer} n borne maximum de la somme
 * @returns {Integer} la somme de 1 à n
 * @example
 */
function additionBoucle(n) { //o(n)
 let total = 0;
 for (let i = 1; i <=n ; i++) {
  total +=1;
 }
 return total;
}

/**
 * Somme 1 à 10 de façon statique qui retourne la soustraction de deux nombres
 * @returns somme de 1 à 10
 * @example
 */
function additionBete() {
 return 1+2+3+4+5+6+7+8+9;
}

/**
 * Somme des nombres de 1 a n en utilisant un calcul mathématique qui retourne la multiplication de deux nombres
 * @param {Integer} n borne maximum de la somme
 * @returns somme de 1 a n
 * @example
 */
function addiotionFormule(n) {// o(1)
  return (n*(n+1))/2
}

console.log();
console.log("bucle " + additionBoucle(10));
console.log("bucle " + additionBete());
console.log("bucle " + addiotionFormule(10));


module.exports = {
  additionBoucle,
  additionBete,
  addiotionFormule,

};