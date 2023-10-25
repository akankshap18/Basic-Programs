function sortDescending(arr) {
    arr.sort(function(a, b) {
        return b - a; 
    });
    return arr;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements of the array : ', (input) => {
  const elements = input.split(' ').map(Number);
  const sortedArray = sortDescending(elements);
  console.log('Sorted Array in Descending Order:', sortedArray);
  rl.close();
});
