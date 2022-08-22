// const
const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// call function
breathAnimation();

// function
function breathAnimation(){
    text.innerText = '吸入!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold 住';
    
        setTimeout(() => {
          text.innerText = '吐出!';
          container.className = 'container shrink';
        }, holdTime);
      }, breatheTime);
}


// 重新一個循環
setInterval(breathAnimation, totalTime);