function randomBubble() {
    let store = "";

    for (let i = 1; i <= 144; i++) {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        store += `<div class="bubble">${randomNum}</div>`;
    }

    let Full = document.querySelector("#full").innerHTML = store;
}

randomBubble();