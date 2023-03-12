const btn = document.querySelector('.btn');
let timer,
    i = 0;


function myAnimation() {
    const elm = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elm.style.top = pos + "px";
            elm.style.left = pos + "px";
        }
    }
}







btn.addEventListener('click', myAnimation);


// function logger () {
//     if (i === 3) {
//         clearInterval(timer);
//     }
//     console.log('text');
//     i++;
// }