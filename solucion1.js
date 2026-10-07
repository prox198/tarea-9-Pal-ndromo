function esPalindromo(str) {
    const n = str.length;
    let inv = "";

    
    for (let j = n - 1; j >= 0; j--) {
        inv += str[j];
    }

    
    if (inv === str) {
        return true;
    } else {
        return false;
    }
}


console.log(esPalindromo("ana")); // true
console.log(esPalindromo("abcba")); // true
console.log(esPalindromo("arroz")); // false
