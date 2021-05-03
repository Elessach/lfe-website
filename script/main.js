
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

function displayRiddle(){
  let riddle = document.getElementById("riddle");
  riddle.style.display = "flex";
}
function closeRiddle(){
  let riddle = document.getElementById("riddle");
  riddle.style.display = "none";
}

let key = 0;
function calculateKey(){
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);

  key = day + month;
  while(key > 9){
    key = key % 10 + (key - key % 10) / 10;
  }
  let birthday = document.getElementById("birthday");
  birthday.style.display = "none";
  let keyDiv = document.getElementById("key");
  keyDiv.style.display = "flex";
  let keyValue = document.getElementById("keyValue");
  keyValue.innerHTML = key;
}

function calculateResult(){
  let resultValue = parseInt(document.getElementById("resultValue").value);
  let result = key + 4 + 7 - 6 - 10;
  if(result == resultValue){
    let keyDiv = document.getElementById("key");
    keyDiv.style.display = "none";
    let success = document.getElementById("success");
    success.style.display = "flex";
    displayProfile();
  }
  else{
    let error = document.getElementById("error");
    error.innerHTML = "Erreur ! La clef proposée n'est pas valide :)"
  }
}

function displayProfile(){
  let name ="";
  let description ="";
  let profileImg = document.getElementById("profileImg");
  switch(key){
    case 1:
      name = "de la Galaxie";
      description = "Vous protégez avec bienveillance les gens que vous aimez.";
      profileImg.style.backgroundImage = "url(img/symbols/Galaxy.PNG)";
      break;
    case 2:
      name = "du Soleil";
      description = "Vous répandez la bonne humeur autour de vous.";
      profileImg.style.backgroundImage = "url(img/symbols/Sun.PNG)";
      break;
    case 3:
      name = "du Cosmos";
      description = "Vous êtes quelqu'un de sérieux et ordonné.";
      profileImg.style.backgroundImage = "url(img/symbols/Cosmos.PNG)";
      break;
    case 4:
      name = "de la Lune";
      description = "Altruiste et génereux.se, vous possédez une douceur sans égal.";
      profileImg.style.backgroundImage = "url(img/symbols/Moon.PNG)";
      break;
    case 5:
      name = "de la Comète";
      description = "Vous êtes une force tranquille qui a son caractère, sans tomber dans l'excès.";
      profileImg.style.backgroundImage = "url(img/symbols/Comet.PNG)";
      break;
    case 6:
      name = "de l'Aurore";
      description = "Brillant.e et intelligent.e, votre entourage vous admire.";
      profileImg.style.backgroundImage = "url(img/symbols/Aurora.PNG)";
      break;
    case 7:
      name = "de la Nébuleuse";
      description = "Vous êtes créatif.ve et savez vous adapter à n'importe quelle situation.";
      profileImg.style.backgroundImage = "url(img/symbols/Nebula.PNG)";
      break;
    case 8:
      name = "de l'Eclipse";
      description = "Mâlin et charismatique, vous savez convaincre les autres.";
      profileImg.style.backgroundImage = "url(img/symbols/Eclipse.PNG)";
      break;
    case 9:
      name = "de l'Etoile";
      description = "Vous avez une vie équilibrée qui vous d'être épanoui dans votre travail et votre vie personnelle.";
      profileImg.style.backgroundImage = "url(img/symbols/Etoile.PNG)";
      break;
    default:
      console.log("error key profile")
      break;
  }
  let profileName = document.getElementById("profileName");
  profileName.innerHTML = "Vous êtes le Gardien ou la Gardienne " + name;
  let profileDescription = document.getElementById("profileDescription");
  profileDescription.innerHTML = description;
}
