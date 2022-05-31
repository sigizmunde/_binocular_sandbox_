// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBt-2_DkP04Zp8AZY8nxkU17XIWQ0dhBoM',
  authDomain: 'cooper-data-62f0c.firebaseapp.com',
  databaseURL: 'https://cooper-data-62f0c-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'cooper-data-62f0c',
  storageBucket: 'cooper-data-62f0c.appspot.com',
  messagingSenderId: '834702985681',
  appId: '1:834702985681:web:58fe47810cc4178c1ff8f0',
  measurementId: 'G-22T4QV9TMK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

// Get a reference to the database service
const myDatabase = getDatabase(app);

console.log(myDatabase);

const refs = {
  inputData: document.querySelector('#text-data'),
  submitBtn: document.querySelector('#submit-btn'),
};

refs.submitBtn.addEventListener('click', onClickSubmit);

function onClickSubmit(event) {
  event.preventDefault();
  if (refs.inputData.value === 'clear') {
    //clearing database
    return -1;
  }
  const submittedData = { rawData: refs.inputData.value };
  set(ref(myDatabase, 'sandbox/data'), submittedData).then(() => {
    updateDataMarkup();
  });
}

function updateDataMarkup() {
  get(child(ref(myDatabase), 'sandbox/data'))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        generateDataMarkup(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

function generateDataMarkup(dataSnapshot) {
  refs.dataContainer = document.querySelector('.output-container');
  const keys = Object.keys(dataSnapshot),
    values = Object.values(dataSnapshot);
  let markupString = '';
  for (let i = 0; i < keys.length; i += 1) {
    markupString += `<p>${keys[i]}: ${values[i]}</p>`;
  }
  refs.dataContainer.innerHTML = markupString;
}
