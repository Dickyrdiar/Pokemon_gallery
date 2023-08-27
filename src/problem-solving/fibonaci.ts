export const fibonaci = (n: number): number[] => {
  // return n < 1 ? 0 : n <= 2 ? 1 : fibonaci(n - 1) + fibonaci(n - 2)

  var number = [0, 1]
  for (let i = 2; i < n; i++) {
     number.push(number[i-1] + number[i-2]) 
  }

  console.log(number)
  
  return number
}
