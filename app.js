let store = "";

let time = 61;

let score = 0;

let randomHit = 0;

function randomBubble() { // for all bubble;

    for (let i = 1; i <= 144; i++) {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        store += `<div class="bubble">${randomNum}</div>`;
    }

    document.querySelector("#full").innerHTML = store;
}



function runTime() { // time run function;
    let Timer = setInterval(() => {
        if (time > 0) {
            time--;
            let timeBox = document.querySelector("#Timer").innerHTML = time;
        } else {
            clearInterval(Timer);
        }
    }, 1000);
}

function newHit() { // hit work function;
    randomHit = Math.floor(Math.random() * 10) + 1;
    document.querySelector("#Hit").textContent = randomHit;
}

function scoreBox() { // score update;
    score += 10;
    document.querySelector("#scorebox").textContent = score;
}

document.querySelector("#full").addEventListener("click", (bubble) => {
    let bubbleText = Number(bubble.target.textContent);
    console.log(typeof bubbleText);
    console.log(bubbleText);

    if (bubbleText === randomHit) {
        console.log("done");
        scoreBox(); // score update;
        randomBubble(); // for all bubble;
        newHit(); // hit work function;
    }
});

randomBubble(); // for all bubble;

runTime(); // time run function;

newHit(); // hit work function;

