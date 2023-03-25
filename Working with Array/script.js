/* eslint-disable no-console */


const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const labelBalance = document.querySelector('.balance__value');

let arr = ['a', 'b', 'c', 'd', 'e'];

// Simple Array Methods
// SLICE

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE

// console.log(arr.splice(2));

arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join(' _ '));

// The new at Method

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last array element

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('---- FOREACH ----');

movements.forEach((mov, i) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// forEach With Maps and Sets
// Map

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  // Set

  const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
  console.log(currenciesUnique);

  currenciesUnique.forEach((value, key) => {
    console.log(`${value}: ${key}`);
  });

  // The map Method
  
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// The filter Method
const deposits = movements.filter((mov) => 
   mov > 0);
console.log(movements);
console.log(deposits);


const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// The reduce Method

console.log(movements);

// accumulator -> SNOWBALL

const balance = movements.reduce((acc, cur, i) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

const balance1 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance1);

// Maximum value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) 
    return acc;
  return mov;
}, movements[0]);

console.log(max);

// The Magic of Chaining Methods

const eurToUsd1 = 1.1;
console.log(movements);

// PIPELINE

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov) => mov * eurToUsd1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// The find Method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// some and every

console.log(movements);

// EQUALITY

console.log(movements.includes(-130));

// SOME: CONDITION

console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// Sorting Arrays

// Strings

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers

console.log(movements);
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);

// More Ways of Creating and Filling Arrays

const arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array([1, 2, 3, 4, 5, 6, ]));

// Emprty arrays + fill method

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

x.fill(1, 3, 5);
x.fill(1);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr4);

// Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

});

// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum)


// 2.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = (title) => {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
