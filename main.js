// var sidebar = document.getElementById("sidebarUnwrapped").style;
// var sidebarVisible = false;
// function button() {
//     if(sidebarVisible == false) {
//         sidebar.visibility = "visible";
//         sidebarVisible = true;
//     } else {
//         sidebar.visibility = "hidden";
//         sidebarVisible = false;
//     }
// }
const sidebarBack = document.querySelector('#sidebar-background-unwrapped');
const sidebar = document.querySelector('#sidebar-unwrapped');

const burger = document.querySelectorAll('button.burger');
const sidebarStyles = sidebar.style;
const sidebarBackStyles = sidebarBack.style;

const burgerOpen = document.querySelector('#burger-open');
const burgerClose = document.querySelector('#burger-close');



let isSidebarVisible = true;

// if (sidebarStyles.visibility === 'visible') {
//   isSidebarVisible = true;
// } else {
//   isSidebarVisible = false;
// }


const toggleSidebar = () => {
  if (sidebarBackStyles.visibility === 'visible') {
    sidebarStyles.left = '-240px';
    isSidebarVisible = false;
  } else {
    sidebarStyles.left = '0px';
    isSidebarVisible = true;
  }
  //console.log("sdaf");
  // if (sidebarStyles.visibility === )

  sidebarBackStyles.visibility = isSidebarVisible ? 'visible' : 'hidden';
  //isSidebarVisible = !isSidebarVisible;
}

burgerOpen.addEventListener("click", toggleSidebar);
burgerClose.addEventListener("click", toggleSidebar);

//const burgerNew = .forEach(burger);
// for (i of burger) {
//   i.addEventListener("click", toggleSidebar);
// }


//burger.forEach();
//console.log(burger);