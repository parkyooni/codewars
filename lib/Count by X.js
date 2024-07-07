// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
export default function countBy(x, n) {
  if (x < 0 && n < 0) return;
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

// 풀이 : x의 인자값부터 시작하는 n에서 끝나는, 즉 for문의 반복문에서 어디까지 반복되는지 그 인자를 z라는 빈배열에 담아야함.
// 0번째부터 i를 순회할경우 index[0] 부터 찍혀서 테스트에 맞지않아, 해당의 경우 별도의 테스트 지시가 없을시 i = 1 부터 진행한다.
