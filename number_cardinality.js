function number_cardinality(number) {
    if (number % 10 === 0) {
        return "zero";
    } else if (number % 10 === 5) {
        return "five";
    } else if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Ejemplo de uso:
console.log(number_cardinality(100));   // Output: "zero"
console.log(number_cardinality(88));    // Output: "even"
console.log(number_cardinality(155));   // Output: "five"
console.log(number_cardinality(99));    // Output: "odd"
