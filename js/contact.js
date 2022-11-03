$ = document.querySelector.bind(document);
window.onload = function () {
    burger_init();
}

const form = document.querySelector("#formId");
form.addEventListener("submit", async (e) => {
    //to stop submiting
    e.preventDefault();
    //simple way
    // let obj={firstName:e.target[0].value,
    // lastName:e.target[1].value}
    //pro way
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    sendDataToServer(inputObject);
})

const sendDataToServer = (formData) => {
    let url = "https://nlp-hadassa.herokuapp.com/client";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.addEventListener("readystatechange", function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            form.submit();
        }
    })

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ formData }));
}