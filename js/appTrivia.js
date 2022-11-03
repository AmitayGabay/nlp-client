$ = document.querySelector.bind(document);

let counter = 0;
let score = 0;

window.onload = function () {
    burger_init();
    createTrivia();
}

function createTrivia() {
    let parent = document.querySelector("#id_parent");
    parent.innerHTML = "";
    if (counter < q_json_ar.length) {
        updateUi();
    }
    else {
        parent.innerHTML =
            `<h2>המשחק נגמר. תודה על השתתפותך!</h2>
        <h3>הניקוד שצברת הוא: <span>${score}</span> נקודות</h3>
        <button id="game_btn">לשחק שוב</button>`;
        let btn = parent.querySelector("#game_btn");
        btn.addEventListener("click", function () {
            parent.innerHTML = "";
            counter = 0;
            score = 0;
            updateUi();
        })
    }
}

function updateUi() {
    let item = q_json_ar[counter];
    let triviaq = new TriviaQ("#id_parent", item);
    triviaq.render();
    counter++;
}

function updateScore(num) {
    score += num;
}