function esPalindromo(str) {
    const n = str.length;

    // 'i' empieza al inicio (0) y 'j' al final (n - 1)
    //llega hasta la mitad de la cadena
    for (let i = 0, j = n - 1; i < Math.floor(n / 2); i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
}

console.log(esPalindromo("ana"));    // true
console.log(esPalindromo("abcba"));  // true
console.log(esPalindromo("arroz"));  // false
