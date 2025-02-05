let btn = document.querySelector('#btn');
let divOP = document.querySelector('#output');
let msg = document.querySelector('#text');
let dly = document.querySelector('#delay');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    const delay = parseInt(dly.value);
    const message = msg.value;
    setTimeout(() => {
        msgPrinter(message, divOP);
    }, delay);
});
function msgPrinter(message, output) {
    output.innerText = message;
}