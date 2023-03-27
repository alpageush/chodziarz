"use strict";
function init() {
    const osoby = ["Marcin", "Jan", "Beata", "Tadeusz", "Teresa"];
    zad1(2, 3);
    zad2(-7);
    zad3();
    zad4(osoby);
    findDividableBy(zad5(10), 5);
}
function zad1(n1, n2) {
    console.log("Różnica: " + (n1 - n2));
    console.log("Iloczyn: " + (n1 * n2));
    console.log("Iloraz: " + (n1 / n2));
}
function zad2(n) {
    console.log("Wartość bezwzględna: " + Math.abs(n));
}
function zad3() {
    const numery = [2, 4, 7, 11, 14, 19, 21, 100];
    console.log("Parzyste: " + numery.filter(n => n % 2 == 0));
    console.log("Nieparzyste: " + numery.filter(n => n % 2 != 0));
}
function zad4(osoby) {
    console.log("Losowa osoba: " + osoby[getRandom(osoby.length)]);
}
function zad5(count) {
    let numery = [];
    for (let i = 0; i < count; i++) {
        numery.push(getRandom(100) + 1);
    }
    return numery;
}
function findDividableBy(array, dividableBy) {
    var lowestNumber = null, highestNumber = null;
    var dividableByNumber = [];
    for (let i = 0; i < array.length; i++) {
        let n = array[i];
        if (lowestNumber == null)
            lowestNumber = n;
        if (highestNumber == null)
            highestNumber = n;
        if (n < lowestNumber)
            lowestNumber = n;
        if (n > highestNumber)
            highestNumber = n;
        if (n % dividableBy == 0)
            dividableByNumber.push(n);
    }
    console.log("Otrzymałem tablicę z " + array.length + " liczbami, gdzie najmniejsza liczba, to " + lowestNumber + ", a największa to " + highestNumber + " w tym liczby podzielne przez 5, to: " + dividableByNumber + ", czyli " + Math.floor((dividableByNumber.length / array.length) * 100) + "%");
}
function getRandom(range) {
    return Math.floor(Math.random() * range);
}
