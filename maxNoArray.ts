function maxarry(ar:number[]) : number {
    let max = ar[0];
    for(let i = 1;i<ar.length;i++){
        if(ar[1]>max){
            max = ar[i];
        }
    }
    return max;
}

const array = [23, 89, 6, 29,56,45,77,32];
const maxNumber = maxarry(array);
console.log("maximum No is :" +maxNumber);
