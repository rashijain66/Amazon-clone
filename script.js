const search = document.getElementById("nav-search");
const country = document.querySelector(".country");
const showCountry = document.querySelector(".country-open");
const backToTop = document.querySelector(".foot-panel1");
const imgs = document.querySelectorAll(".hero-section ul img");
const prevBtn = document.querySelector(".control-prev");
const nxtBtn = document.querySelector(".control-next");
const scrollContainer = document.querySelectorAll(".products");
const hamberger = document.querySelector(".panel-all");
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");

hamberger.addEventListener("click", (e)=>{
    sidebar.classList.remove("disp");
    cross.classList.remove("disp");
    document.body.style.overflow = 'hidden';
})

cross.addEventListener("click", ()=>{
    sidebar.classList.add("disp");
    cross.classList.add("disp");
    document.body.style.overflow = 'unset';
})

search.addEventListener("focusin", ()=>{
    search.classList.add("active");
})

search.addEventListener("focusout", ()=>{
    search.classList.remove("active");
})

backToTop.addEventListener("click", ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

let n=0;
function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
changeSlide();

prevBtn.addEventListener("click", (e)=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length -1;
    }
    changeSlide();
})

nxtBtn.addEventListener("click", (e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

for(const item of scrollContainer){
    item.addEventListener("wheel", (e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}

country.addEventListener("mouseover", ()=>{
    showCountry.classList.remove("disp");
})

country.addEventListener("mouseout", ()=>{
    showCountry.classList.add("disp");
})

showCountry.addEventListener("mouseover", ()=>{
    showCountry.classList.remove("disp");
})

showCountry.addEventListener("mouseout", ()=>{
    showCountry.classList.add("disp");
})