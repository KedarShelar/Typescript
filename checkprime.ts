function primo(num:number) : boolean {
   if(num<= 1){
    return false;
   }
   for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i ===0){
        return false;
    }
   }
   return true
}

const UIP : number =11;
if(primo(UIP)){
    console.log(`${UIP} is a prime number`);
}else {
    console.log(`${UIP} is a not a prime number`);
}