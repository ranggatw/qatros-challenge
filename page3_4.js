function findDireferenc(numbers) {
  numbers = numbers.split(' ');

  let positions = [[], []];

  for (let i = 0; i < numbers.length; i++) {
      positions[numbers[i] % 2].push(i + 1);
  }

  if(positions[0].length === 1) return positions[0][0];
  if(positions[1].length === 1) return positions[1][0];

  return 0;


}

console.log(findDireferenc("2 4 7 8 10"))
console.log(findDireferenc("1 2 1 1"))
console.log(findDireferenc("4 3 7 5 3 9"))