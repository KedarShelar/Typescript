function Maximum(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log("largest number is :" + n1);
    }
    else if (n2 >= n1 && n2 >= n3) {
        console.log("largest number is :" + n2);
    }
    else {
        console.log("largest number is :" + n3);
    }
}
var A = 23;
var B = 89;
var C = 6;
Maximum(A, B, C);
