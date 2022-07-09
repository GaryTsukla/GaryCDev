// ------------------------------------------------------ Navbar stuff

const navbar=document.getElementById('nav');

// Setting nav bar components to highlight when in view
{
  class watchArea{
    constructor(id,navChild){
      this.section=document.getElementById(id);
      this.id=id;
      this.n=navChild;
      this.visible=false;
      this.navButton=navbar.children[navChild];
      this.background=this.navButton.querySelector('.background');
      this.watch=new IntersectionObserver(
        (entries)=>{this.updateNav(entries);},
        {rootMargin:'-10px 0px'}
      );
      this.watch.observe(this.section);
    }
    setBackground(l,r){
      this.background.style.left=l+'%';
      this.background.style.right=r+'%';
    }
    updateNav(entries){
      let e=entries[0];
      if(e.intersectionRatio==0){
        this.setBackground(0,100);
      }else{
        this.setBackground(0,0);
      }
    }
  }
  new watchArea('intro',0);
  new watchArea('aboutme',1);
  new watchArea('projects',2);
  new watchArea('footer',3);
}

// Setting up button to open or close the nav menu, only for small screens
const checkWidth=function(e){// Check screen width
  if(e.matches){  // == small screen
    useNavButton=false;
  }else{          // != Small screen
    useNavButton=true;
    navOpen=false;
    navButton.classList.remove('opened');
    navbar.classList.remove('opened');
  }
};
const openCloseNav=function(){
  if(!useNavButton){return;}
  if(navOpen){
    // close navbar
    navOpen=false;
    navButton.classList.remove('opened');
    navbar.classList.remove('opened');
    
  }else{
    // open navbar
    navOpen=true;
    navButton.classList.add('opened');
    navbar.classList.add('opened');
  }
};
const removeNavBar=function(){
  if(useNavButton && navOpen){
    openCloseNav();
  }
};
const setupNavBarAutoRemoval=function(){
  for(let i=0,l=navLinks.length;i<l;i++){
    navLinks[i].addEventListener('click',removeNavBar,false);
  }
  for(let i=0,l=sections.length;i<l;i++){
    sections[i].addEventListener('click',removeNavBar,false);
  }
};
const widthWatch = window.matchMedia('screen and (min-width:55em)');
const navButton=document.getElementById('navopen');
let useNavButton=false;
let navOpen=false;
navButton.addEventListener('click',openCloseNav,false);
checkWidth(widthWatch);
widthWatch.addEventListener('change',checkWidth,false);
const navLinks=navbar.querySelectorAll('a');
let sections=document.querySelectorAll('header,section,footer');
setupNavBarAutoRemoval();