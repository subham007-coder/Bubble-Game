let store = "";


for (i = 1; i <= 189; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNum);

    store += `<div class="bubble">${randomNum}</div>`;
}
let Full = document.querySelector("#full").innerHTML = store;