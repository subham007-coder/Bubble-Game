let store = "";

let time = 6;

// let GameOverTime = 6;

let score = 0;

let randomHit = 0;

function randomBubble() { // for all bubble;

    for (let i = 1; i <= 270; i++) {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        store += `<div class="bubble">${randomNum}</div>`;
    }

    document.querySelector("#full").innerHTML = store;
}

function runTime() { // time run function;
    let Timer = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#Timer").innerHTML = time;
        } else {
            clearInterval(Timer);
            document.querySelector("#full").innerHTML = `<h1>Game Over!</h1> <button id = "try">Try Again</button>`;
            GameOver();
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
    let bubbleText = parseInt(bubble.target.textContent);
    console.log(bubble.target);
    console.log(typeof bubbleText);
    console.log(bubbleText);

    if (bubbleText === randomHit) {
        console.log("done");
        scoreBox(); // score update;
        randomBubble(); // for all bubble;
        newHit(); // hit work function;
    } else {
        let err = setInterval(() => {
            document.querySelector("#full").innerHTML = `<h4>Click On Hit Number Of Bubble!</h4>`;
        }, 100);
        setTimeout(() => {
            clearInterval(err);
            scoreBox(); // score update;
            randomBubble(); // for all bubble;
            newHit(); // hit work function;
        }, 3000)
    }
});

randomBubble(); // for all bubble;

runTime(); // time run function;

newHit(); // hit work function;

function GameOver() {

    let Try = document.querySelector("#try").addEventListener("click", () => {
        console.log("click");
        time = 6;
        setInterval(() => {
            if (time > 0) {
                time--;
                document.querySelector("#Timer").innerHTML = time;
            }
            score = 0;
            document.querySelector("#scorebox").textContent = score;
        }, 1000)
    })
}