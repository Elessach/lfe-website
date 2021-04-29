
let isMenuOpen = false;

function closeMenu(){
  let menu = document.getElementById("menuMobile");
  menu.style.display = "none";
  isMenuOpen = false;

  menuButton.classList.remove("is-active");
}

function switchMenu(){
  console.log(isMenuOpen)
  if(isMenuOpen){
    closeMenu();
  }
  else{
    let menu = document.getElementById("menuMobile");
    menu.style.display = "flex";
    isMenuOpen = true;

    let menuButton = document.getElementById("menuButton")
    menuButton.classList.add("is-active");
  }
}
