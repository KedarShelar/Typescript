class Arithmatic{
   Number1 : number;
   Number2 : number;

   constructor(N1 : number, N2 : number,){
    this.Number1 = N1;
    this.Number2 = N2;
   
   }
   Addition(): number{
      return this.Number1 + this.Number2
   }
   Subtraction(): number{
      return this.Number1 - this.Number2
   }
   Multiplication(): number{
      return this.Number1 * this.Number2
   }
   Division(): number{
      return this.Number1 / this.Number2
   }   
}

var A = new Arithmatic(15,25);
var B = new Arithmatic(30,40);

console.log(A.Addition());
console.log(B.Addition());
console.log(A.Subtraction());
console.log(B.Subtraction());
console.log(A.Multiplication());
console.log(B.Multiplication());
console.log(A.Division());
console.log(B.Division());

