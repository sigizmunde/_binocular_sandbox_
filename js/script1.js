const Btn1 = document.getElementById('btn1');

console.log(typeof Btn1);

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

Btn1.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});

let ij = 0;
Btn1.addEventListener('click', clickCounter, 'bubble');
function clickCounter() {
    ij++;
    console.log(`clicked ${ij} times`);
}


// function changes object referenced by its argument

const Array111 = ['stable', 'new', 'another one', 'one more', 'the last element'];

function changeArray(arr) {
  arr[0] = 'changed';
}

changeArray(Array111); //function changes Array111

console.table(Array111);

//---------------------------------------------------

console.log('array push and unshift');


const arr22 = [22, 2225];
const arr225 = [55, 255, 'mmc', 'cf', 'sd'];
const arr55555 = [5, 55, 555, 5555, 55555];

arr22.push(...arr225);

console.log('new arr22 length', arr22.unshift(...arr55555));
console.table(arr22);

//---------------------------------------------------