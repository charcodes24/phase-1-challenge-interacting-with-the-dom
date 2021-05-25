//declare global variables
document.addEventListener('DOMContentLoaded', () => {

let counter = document.getElementById('counter');
let add = document.getElementById('plus');
let subtract = document.getElementById('minus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let form = document.querySelector('form');
let comment = document.getElementById('comment-input');
let commentList = document.getElementById('list');
let ul = document.querySelector('.likes');
let seconds = 0;
let startCounting = window.setInterval(increase, 1000);

//function to increase number & eventListener
function increase() {
    seconds ++;
    counter.innerHTML = seconds;
}
add.addEventListener('click', increase);

//function to decrease number & eventListener
function decrease() {
    seconds--;
    counter.innerHTML = seconds;
}
subtract.addEventListener('click', decrease);

//function to pause/resume counter & eventListener
let paused = true;

function pauseButton(){
    if(paused){
        clearInterval(startCounting)
        paused = false;
        pause.innerHTML = 'resume'
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
    }else{
        startCounting = window.setInterval(increase, 1000);
        paused = true;
        pause.innerHTML = 'pause'
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
    };
 };
pause.addEventListener('click', pauseButton);

//comment box function & eventListener
function addComment(e) {
    e.preventDefault();
    let listText = comment.value;
    let list = document.createElement('p');
    list.innerHTML = listText;
    commentList.append(list);
    form.reset();
}
form.addEventListener('submit', addComment);

//like button adds like for the number that is currently displayed
//like function & event listener
//button counter function to pass into addLikes function for li text
let clickCount = 1;
function buttonCounter() {
    heart.onclick = function() {
        clickCount++
    }
    return clickCount;
};

function addLikes() {
    buttonCounter();
    let numLikes = document.createElement('li');
    numLikes.innerHTML = `${seconds} has been liked ${clickCount} times.`
    ul.appendChild(numLikes);
};
heart.addEventListener('click', addLikes);

});

