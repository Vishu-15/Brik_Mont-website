// console.log(window.innerWidth);
let jumbo=document.querySelector(".jumbotron");
let video=document.querySelector(".jumbotron video");
if(video && window.innerWidth<600){
    jumbo.removeChild(video);
    let image=document.createElement('img');
    image.setAttribute('src','./images/about_bg.png');
    image.className="img-fluid";
    image.style.height='50vh';
    jumbo.insertBefore(image,jumbo.firstChild);
}

if(window.innerWidth<600){
    if(document.querySelector(".jumbotron .img-fluid")){
        document.querySelector(".jumbotron .img-fluid").style.height='50vh';
    }
    else{
        document.querySelector(".jumbo .img-fluid").style.height='40vh';
    }
}

setTimeout(()=>{
    if(document.querySelector(".jumbotron-logo")){
        if(window.innerWidth<600){
            document.querySelector(".jumbotron-logo").style.top="28%";
        }
        else{
            document.querySelector(".jumbotron-logo").style.top="35%";
        }
    }
    
    else{
        if(window.innerWidth<600){
            document.querySelector(".jumbo-logo").style.top="25%";
        }
        else{
            document.querySelector(".jumbo-logo").style.top="30%";
        }
    }
},1);

window.addEventListener("scroll",()=>{
    // console.log(window.scrollY);
    if(window.scrollY>150){
        document.querySelector(".navbar").classList.add('nav-onscroll-bg'); 
        let texts = document.querySelectorAll(".nav-link");
        for(text of texts){
            text.classList.add('nav-onscroll-txt'); 
        }
    }
    else{
        document.querySelector(".navbar").classList.remove('nav-onscroll-bg'); 
        let texts = document.querySelectorAll(".nav-link");
        for(text of texts){
            text.classList.remove('nav-onscroll-txt'); 
        }
    }
});

