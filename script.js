let circles = document.body.querySelectorAll(".circle");
let line = document.body.querySelector("#progress");
let prev = document.body.querySelector('#prev');
let next = document.body.querySelector('#next');

let currentActive = 1;

next.addEventListener('click',() => {
    currentActive++;

    //edge cases
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click',() => {
    currentActive--;
    
    //edge cases
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, x) => {
        if(x < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }        
    })
    const actives = document.querySelectorAll('.active')

    line.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
