$ = document.querySelector.bind(document);
let counter = 0;
let toggle_ar = [];

window.onload = function(){
    burger_init();
    lightbox();
}

function lightbox(){
    let media = document.querySelector(".media");
    for(let i=1; i<=20; i++){
        toggle_ar[i] = false;
        let box = document.querySelector(`.box${i}`);
        box.addEventListener("click", function(){
            if(toggle_ar[i] == false){
            counter++;
            box.style.height = "500px";
            box.style.width = "500px";
            box.style.position = "fixed";
            box.style.top = 0;
            box.style.right = "498px";
            box.style.border = "dotted black 4px";
            box.style.zIndex = counter;
            toggle_ar[i] = true;
        }
        else{
            // media.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,170,0.34807426388524154) 100%)";
            box.style.height = "";
            box.style.width = "";
            box.style.position = "unset";
            box.style.border = "none"
            box.style.zIndex = 0;
            toggle_ar[i] = false;
        }
        }) 
    }
     
}
