// document.querySelector(".jumbotron .img-fluid").playbackRate=0.75;

let windowHeight=window.innerHeight;
let subVal=window.innerWidth<600?0.85:1.5;
let scrollPos=Math.abs(windowHeight-(subVal*windowHeight));
// let itemsTrate=window.innerWidth<600?100:280;

window.addEventListener("scroll",()=>{
    // console.log(window.scrollY);
    if(window.scrollY>scrollPos){
        document.querySelector("#item1").style.transform='translateX(0%)';
        document.querySelector("#item2").style.transform='translateX(0%)';
        document.querySelector("#item3").style.transform='translateX(0%)';
    }
    else{
        document.querySelector("#item1").style.transform='translateX(-300%)';
        document.querySelector("#item2").style.transform='translateX(-600%)';
        document.querySelector("#item3").style.transform='translateX(-900%)';
    }
});