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

const sidebar = document.querySelector('#sidebar-unwrapped');
const burger = document.querySelectorAll('burger');
const sidebarStyles = sidebar.style;
let isSidebarVisible = false;

const toggleSidebar = () => {
  sidebarStyles.visibility = isSidebarVisible ? 'visible' : 'hidden';
  isSidebarVisible = !isSidebarVisible;
  alert(sidebarStyles.visibility);
}

burger.map(addEventListener("click", toggleSidebar));
