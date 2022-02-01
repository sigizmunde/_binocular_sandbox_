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