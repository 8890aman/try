let i=0;
function visibleon(){
const visible=document.querySelector('.service__box-2');
const invisible=document.querySelector('.service__box-1');
const invisible3=document.querySelector('.service__box-3');
    visible.classList.add("active_project")
    invisible3.classList.remove("active_project")
    invisible.classList.remove("active_project")
    const banner=document.getElementById('b2');
        const rbanner=document.getElementById('b1');
        const rbanner1=document.getElementById('b3');
        rbanner.classList.remove("color");
        rbanner1.classList.remove("color");
        banner.classList.add("color");


}
function visibleon0(){
    const visible=document.querySelector('.service__box-1');
    const invisible=document.querySelector('.service__box-2');
    const invisible3=document.querySelector('.service__box-3');
        visible.classList.add("active_project")
        invisible3.classList.remove("active_project")
        invisible.classList.remove("active_project")
        const banner=document.getElementById('b1');
        const rbanner=document.getElementById('b2');
        const rbanner1=document.getElementById('b3');
        rbanner.classList.remove("color");
        rbanner1.classList.remove("color");
        banner.classList.add("color");
    }

function visibleon2(){
    const visible=document.querySelector('.service__box-3');
    const invisible=document.querySelector('.service__box-1');
    const invisible2=document.querySelector('.service__box-2');
        visible.classList.add("active_project");
        invisible.classList.remove("active_project");
        invisible2.classList.remove("active_project");
        const banner=document.getElementById('b3');
        const rbanner=document.getElementById('b1');
        const rbanner1=document.getElementById('b2');
        rbanner.classList.remove("color");
        rbanner1.classList.remove("color");

        banner.classList.add("color")

    }
    



    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });



      function showmenu(){
        const menu=  document.getElementById('menu-bar');
       if(i===0){
        i++;
        menu.style.display="flex";
        menu.style.right="0px"
       }
       else{
        menu.style.display="none";
        i--;
        console.log("working");
       }

      }


