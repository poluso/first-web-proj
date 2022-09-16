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
const sidebarBackStyles = sidebarBack.style;

const sidebar = document.querySelector('#sidebar-unwrapped');
const sidebarStyles = sidebar.style;

const burger = document.querySelectorAll('button.burger');
const burgerStyles = burger.style;

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

const changeBack = () => {
  //burgerOpen.
  this.classList.add("burger-onclick");
  //setTimeout(thisElem.classList.remove("burger-onclick"), 200);
  // burger.forEach(function (burgerIndex) {
  //   burgerIndex.classList.add("burger-onclick");
  // })
  // setTimeout(burger.forEach(function(burgerIndex) {
  //   burgerIndex.classList.remove("burger-onclick");
  // }), 2000)
}

burgerOpen.addEventListener("click", toggleSidebar, changeBack);
burgerClose.addEventListener("click", toggleSidebar, changeBack);

//const burgerNew = .forEach(burger);
// for (i of burger) {
//   i.addEventListener("click", toggleSidebar);
// }

//burger.forEach();
//console.log(burger);