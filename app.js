let store = "";

let time = 61;

function randomBubble() {

    for (let i = 1; i <= 144; i++) {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        store += `<div class="bubble">${randomNum}</div>`;
    }

    let Full = document.querySelector("#full").innerHTML = store;
}



function runTime() {
  let Timer = setInterval(() => {
        if (time > 0) {
            time--;
            let timeBox = document.querySelector("#Timer").innerHTML = time;
        } else{
            clearInterval(Timer);
        }
    }, 1000);
}



randomBubble();

runTime();