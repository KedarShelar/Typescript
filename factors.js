function Factors(num) {
    var factors = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
var num = 20;
var factor = Factors(num);
console.log("The factors of ".concat(num, " are: ").concat(factor.join(", ")));
