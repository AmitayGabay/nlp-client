class TriviaQ {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.q = _item.q;
        this.answers_ar = _item.answers;
        this.correctAnswer = _item.correctAnswer;
    }

    render = () => {
        let div = document.createElement("div");
        div.className = "wrapperTrivia";
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
      <h2>${this.q}</h2>
         <div class="wrapperBtn d-flex justify-content-around flex-wrap">
         </div>
         <h2>ניקוד: <span id="id_score"></span></h2>
      `
        let wrapperBtn = div.querySelector(".wrapperBtn");
        let id_score = div.querySelector("#id_score");
        id_score.innerHTML = score;
        this.answers_ar.forEach((item, i) => {
            let btn = document.createElement("button");
            btn.className = "btn col-md-5 mb-5";
            btn.innerHTML = item;
            wrapperBtn.append(btn);
            btn.addEventListener("click", () => {
                // console.log(this.correctAnswer);
                // console.log(i);
                if (i == this.correctAnswer) {
                    alert("תשובה נכונה");
                    updateScore(10);
                    btn.style.background = "green";
                    setTimeout(function () {
                        if(score<0){
                            score = 0;
                        }
                        createTrivia();
                    }, 1000);
                }
                else {
                    alert("תשובה שגויה, נסה שנית!");
                    updateScore(-5);
                    btn.style.background = "red";
                }
            })
        })
    }
}