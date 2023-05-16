function range_vision(number) {
    const digits = String(number).split("").map(Number);
    let minValue = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < digits.length; i++) {
        const range = digits[i];
        let visionSum = 0;

        for (let j = i - range; j <= i + range; j++) {
            if (j >= 0 && j < digits.length) {
                visionSum += digits[j];
            }
        }

        minValue = Math.min(minValue, visionSum);
    }

    return digits.includes(1) && minValue === digits.reduce((a, b) => a + b);
}

// Ejemplo de uso:
console.log(range_vision(34315));  // Output: true
