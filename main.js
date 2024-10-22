// toggle button
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); 
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click',()=> {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle('ri-close-large-line ');
});


navLinks.forEach(links => {
    links.addEventListener('click' , ()=>{
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle('ri-close-large-line ');
    })
})

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed : 400,
    spaceBetween : 30,
    autoplay : {
        delay : 3000,
        disableOnInteraction : false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true
    },
    grabCursor : true,
    breakpoints : {
        640 : {
            slidesPerView :1
        },
        768 : {
            slidesPerView :2
        },
        1024 : {
            slidesPerView :3
        },
    }
  
  });

  // scrool up
  const scroolUp = () => {
    const scroolUpBtn = document.getElementById("scrool-up");

    if(this.scrollY >= 250 ){
        scroolUpBtn.classList.remove("-bottom-1/2")
        scroolUpBtn.classList.add("bottom-4")
    }else{
        scroolUpBtn.classList.add("-bottom-1/2")
        scroolUpBtn.classList.remove("bottom-4")
    }
  } 
  window.addEventListener("scroll" , scroolUp);

    // change background header
    const scroolHeader = () => {
        const header = document.getElementById("navbar");
    
        if(this.scrollY >= 50 ){
            header.classList.add("border-b","border-yellow-500")
        }else{
            header.classList.remove("border-b","border-yellow-500")
        }
      } 
      window.addEventListener("scroll" , scroolHeader);


// scroll section active link
const activeLink = () =>{
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active");

        if(item.href.includes(current)){
            item.classList.add("active");
        }
    })
}

window.addEventListener("scroll" , activeLink);

// annimation for reveal
const sr = ScrollReveal({
    origin : "top",
    distance : "60px",
    duration : "2500",
    delay : 300,
    reset : true
})
sr.reveal('.home__data ,.about__top , .popular__top ,.review__top ,.review__swiper,.footer__icon,.footer__content,.copy__right')
sr.reveal('.home__image',{delay : 500 , scale : 0.5})
sr.reveal('.service__card ,.popular__card ',{interval : 100})

sr.reveal('.about__leaf' ,{delay : 1000 , origin:"right"})

sr.reveal('.img__about__2 , content__about__1' ,{delay : 1000 , origin:"right"})
sr.reveal('.img__about__1 , content__about__2' ,{delay : 1000 , origin:"left"})

sr.reveal('.review__leaf' ,{delay : 1000 , origin:"left"})