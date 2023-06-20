function arrayadd(n1:number[]):number {
 let sum : number = 0;
 for (let i=0 ; i<n1.length;i++){
    sum = sum + n1[i];
 }
 return sum; 
}

const array1 = [23,6,7,4,5,7];
const addar = arrayadd(array1);
console.log("addition is :" +addar)