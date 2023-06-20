function primo(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
var UIP = 11;
if (primo(UIP)) {
    console.log("".concat(UIP, " is a prime number"));
}
else {
    console.log("".concat(UIP, " is a not a prime number"));
}
