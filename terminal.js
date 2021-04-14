let x = document.getElementById('demo');
let y = prompt('Please type in your name')
let b = document.getElementById('loop');
let q = document.getElementById('here');
let bg = document.querySelector('.party');



x.innerHTML = `Hello ${y} how are you today?`;

let counter = 0;
setTimeout(() => { q.innerHTML = `I just want you to know that...` }, 1000);


setTimeout(() => {
    function ulit() {
        setTimeout(() => {
            b.innerHTML = `I love you ${counter++} 😍😍`;
            ulit();
            bg.style.display = 'block';
        }, 0.0);
    }
    ulit()
}, 3000);