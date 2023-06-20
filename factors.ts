function Factors(num: number): number[]
{
    const factors: number[] = [];

      for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
      return factors;
}
  
  const num = 20;
  const factor = Factors(num);
  console.log(`The factors of ${num} are: ${factor.join(", ")}`);

