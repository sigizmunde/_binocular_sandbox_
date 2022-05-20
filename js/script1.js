// const Btn1 = document.getElementById('btn1');

// console.log(typeof Btn1);

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// Btn1.addEventListener('click', () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// });

// let ij = 0;
// Btn1.addEventListener('click', clickCounter, 'bubble');
// function clickCounter() {
//     ij++;
//     console.log(`clicked ${ij} times`);
// }

// // function changes object referenced by its argument

// const Array111 = ['stable', 'new', 'another one', 'one more', 'the last element'];

// function changeArray(arr) {
//   arr[0] = 'changed';
// }

// changeArray(Array111); //function changes Array111

// console.table(Array111);

// //---------------------------------------------------

// console.log('array push and unshift');

// const arr22 = [22, 2225];
// const arr225 = [55, 255, 'mmc', 'cf', 'sd'];
// const arr55555 = [5, 55, 555, 5555, 55555];

// arr22.push(...arr225);

// console.log('new arr22 length', arr22.unshift(...arr55555));
// console.table(arr22);

// //---------------------------------------------------

// const arraySlice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.table([...arraySlice.slice(5, arraySlice.length), ...arraySlice.slice(0, 5)]);
// console.log("Here it is ^");

// //---------------------------------------------------

// const products = [ {
//   id : 'sku1',
//   qty: 1,
// }, {
//   id : 'sku2',
//   qty: 2,
// }, {
//   id : 'sku3',
//   qty: 3,
// }, {
//   id : 'sku1',
//   qty: 6,
// }, {
//   id : 'sku1',
//   qty: 8,
// }, {
//   id : 'sku2',
//   qty: 19,
// }, {
//   id : 'sku4',
//   qty: 1,
// } ]

// //Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
// //(Потрібно мутувати даний масив, створювати новий не потрібно)

// function reduceDoubling(arr) {
//   for (let i=0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i].id === arr[j].id) {
//         arr[i].qty += arr[j].qty;
//         arr.splice(j, 1);
//         j--;
//       }
//     }
//   }
// }

// reduceDoubling(products);
// console.log(products);

// //-----------------------------------------------------------

// const heapSort = (array) => {
//   // forming a tree
//   for (let i = Math.floor(array.length - 2); i >= 0; i -= 1) {
//     if (array[i] <= array[i + 2]) {
//       const temp = array[i];
//       array[i] = array[i + 2];
//       array[i + 2] = temp;
//     }
//      console.log(array.join(', '));
//     if (array[i] <= array[i + 1]) {
//       const temp = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = temp;
//     }
//      console.log(array.join(', '));
//   }

//   const first = array[0];
//   array[0] = array[array.length - 1];
//   array[array.length - 1] = first;

//   return array.length > 1 ? [...heapSort(array.slice(0, array.length - 1)), array[array.length - 1]] : array;
// }

const inputArray = [23, 1, 34, 15, 165, 312, 59, 12, 1023, 22];
console.log(inputArray);
console.log(heapSort(inputArray));

//====================================================================

setTimeout((a) => {
  console.log("A");
}, 0);

const prom1 = new Promise((resolve) => resolve("success value"));
prom1.then((value) => console.log(value));
//promise is a microtask would log first, then timed out function executes

//====================================================================
