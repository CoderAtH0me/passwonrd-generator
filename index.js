
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];


function whatCharacters () {
  let checkBox = document.getElementById("myCheck");
  if (checkBox.checked) {
    characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9"];
  } else {
    characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
  "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
  "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
};
}

let outputOne = document.querySelector("#output-one")
let outputTwo = document.querySelector("#output-two")
function getPass (output) {
    let password = ""
    for (i = 1; i <= 15; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length);
        password += characters[randomIndex];
    }
    output.style.display = "block";
    output.textContent = password;
}

function copyFn (element) {
  let copyText = element.textContent;
  navigator.clipboard.writeText(copyText);

  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText;
}
function outFunc() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}