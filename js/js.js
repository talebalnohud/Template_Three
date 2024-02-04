// ============================= Mega Menu  =============================

let megaMenu = document.querySelector("header .main-nav  li:last-child");
let a = document.querySelector("header .mega-menu");
megaMenu.addEventListener("click",function(){
    a.classList.toggle('active');
});


// ===========================================================================
// ============================= Skills progress =============================

let toUp = document.querySelector(".to-up");
let articles = document.querySelector(".articles");


let skills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".scour span");

// ===========================================================================
// =============== The time remaining until the end fo the yea =============== 

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(()=>{

    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ) );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 ) );
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000 );
    
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days ;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours ;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes ;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds ;

    if (dateDiff < 0){
        clearInterval(counter);
    }
},1000)

// ==============================================================================

let nums = document.querySelectorAll(".box .num");
let section = document.querySelector(".stats");
let started = false;


window.onscroll = function () {
// ============================= Skills progress =============================

if (window.scrollY >= skills.offsetTop - 250){
    spans.forEach((span)=>{
        span.style.width = span.dataset.width
    })
// ============================= Arrow Scrolling =============================
}
if (window.scrollY >= articles.offsetTop ){
    toUp.classList.add("up-scroll")
}
if (window.scrollY < articles.offsetTop ){
    toUp.classList.remove("up-scroll")
}
// ============================= Counter =============================
    if (window.scrollY >= section.offsetTop - 2000) {
        if(!started){
            nums.forEach((num)=> startCount(num))
        }
        started = true
    }
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if (el.textContent ===  goal){
            console.log(el.textContent)
            clearInterval(count); 
        }
    },2000 / goal)
}