
var btn_prev = document.querySelector(".btn_prev");
var btn_next = document.querySelector(".btn_next");
var images = document.querySelectorAll("img");

var i = 0;
console.log(images.length - 1);

btn_next.addEventListener("click", () => {
    images[i].style.display = "none";
    i++;
    if(i >= images.length){
        i = 0
    }
    images[i].style.display = "block"
    console.log(i);
})

btn_prev.addEventListener("click", () => {
    images[i].style.display = "none";
    i--;
    if(i < 0){
        i = images.length - 1
    }
    images[i].style.display = "block";
    console.log(i);
})
