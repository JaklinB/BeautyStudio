const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

const navbar = document.querySelector(".nav-menu");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".nav-link");

toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




// Change Header Background When Scroll Down

function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 200){
        scrollHeader.classList.add('scroll-header')
    }
    else{
        scrollHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

const btnSeeMore = document.querySelector("#gallery > div > button");
btnSeeMore.addEventListener('click', function seeMore(){
    
   let hiddenGal =  document.getElementById('galleryListImgHidden');
   hiddenGal.style.display='flex';
   hiddenGal.style.flexWrap='wrap';
   hiddenGal.style.maxWidth='1200px';
   hiddenGal.style.width='100%';
   hiddenGal.style.justifyContent='center';
   hiddenGal.style.margin='2.5rem auto';
   hiddenGal.style.position='relative';
   hiddenGal.style.backgroundColor='var(--main-color)';


   btnSeeMore.style.display='none';

   let showLessBtn = document.createElement("button");
   showLessBtn.innerHTML = "Виж по-малко";
   showLessBtn.classList.add("btn");
   showLessBtn.style.margin='0 auto';
   document.querySelector("#gallery > div").appendChild(showLessBtn);

    showLessBtn.addEventListener('click', function showLessFnc(){
        btnSeeMore.style.display='flex';
        showLessBtn.style.display='none';
        hiddenGal.style.display='none';
    });
    

});

/*---*/


window.addEventListener("scroll", () => {
  changeOnScr();
});

const changeOnScr = () => {
 

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 5) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change"); 
    }
    
  });

};





