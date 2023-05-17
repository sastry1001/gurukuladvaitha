let modalEl = document.getElementById("modal");
let closeEl = document.getElementById("close");

/* modal appearing timer start */
let countdown = 8;
let interval = setInterval(function() {
    
    countdown = countdown - 1;
    if (countdown === 0) {
        modalEl.classList.add("d-flex");
        clearInterval(interval);
    }
}, 1000);
/* modal appearing timer end */

/* modal disappearing timer start*/
let disappearCountDown = 25;
let disappearInterval = setInterval(function() {
    
    disappearCountDown = disappearCountDown - 1;
    if (disappearCountDown === 0) {
        modalEl.classList.add("d-none");
        clearInterval(disappearInterval);
    }
}, 1000);
/* modal disappearing timer end*/

closeEl.addEventListener("click",function(){
    modalEl.classList.add("d-none");
})
