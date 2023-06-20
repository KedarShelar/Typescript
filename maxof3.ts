function Maximum(n1 : number, n2 : number, n3 : number) : void
{
 if(n1>n2 && n1>n3) {
          console.log("largest number is :" + n1)
        }
        else if (n2>= n1 && n2 >= n3) {
            console.log("largest number is :" + n2)
        }
        else {
            console.log("largest number is :" + n3)
        }
}

var A : number = 23
var B : number = 89
var C : number = 6

Maximum(A,B,C);