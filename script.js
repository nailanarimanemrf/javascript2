function inverserChaine(str) {
  return str.split('').reverse().join('');
}
function compterCaracteres(str) {
  return str.length;
}

function capitaliserMots(phrase) {
  return phrase
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}

// Fonctions du tableau

function trouverMaximum(tab) {
  return Math.max(...tab);
}

function trouverMinimum(tab) {
  return Math.min(...tab);
}

function sommeTableau(tab) {
  return tab.reduce((acc, val) => acc + val, 0);
}

function filtrerTableau(tab, condition) {
  return tab.filter(condition);
}

// Fonctions mathématiques

function factorielle(n) {
  if (n <= 1) return 1;
  return n * factorielle(n - 1);
}

function estPremier(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}


console.log("Inverser :", inverserChaine("bonjour"));              
console.log("Nb caractères :", compterCaracteres("Hello"));        
console.log("Capitaliser :", capitaliserMots("bonjour tout le monde")); 
console.log("Max :", trouverMaximum([5, 3, 9, 1]));                
console.log("Min :", trouverMinimum([5, 3, 9, 1]));                 
console.log("Somme :", sommeTableau([1, 2, 3, 4]));                 
console.log("Filtrer > 10 :", filtrerTableau([1, 10, 15], x => x > 10)); 

console.log("Factorielle 5 :", factorielle(5));                 
console.log("Est premier 7 :", estPremier(7));                     
console.log("Fibonacci (7 termes) :", fibonacci(7));             