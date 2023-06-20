function getSecondHighestNumber(numbers: number[]): number {
    numbers.sort((a, b) => b - a);
    return numbers[1];
  }
  
  const array2max = [29,3,89,23,56,45];
  const secondHighest = getSecondHighestNumber(array2max);
  console.log("Second highest number in array:", secondHighest);
  