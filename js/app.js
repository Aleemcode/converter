
const input = document.getElementById('lbsInput');
const output = document.getElementById('output');

output.style.visibility = 'hidden';

input.addEventListener('input', (e) => {
    let lbs = e.target.value;
    console.log(lbs);
    output.style.visibility = 'visible';

    let grams = document.getElementById('gOutput');
    grams.innerHTML = lbs * 1000;

    let milGrams = document.getElementById('mgOutput');
    milGrams.innerHTML = lbs * 1e+6;

    let pounds = document.getElementById('poundsOutput');
    pounds.innerHTML = lbs * 2.205;

    let ounces = document.getElementById('ozOutput');
    ounces.innerHTML = lbs * 35.274;

    e.preventDefault();
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }

