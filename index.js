const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPasswordEl=document.getElementById("firstPassword")
let secondPasswordEl=document.getElementById("secondPassword")
let random=""

function Generate(){
    let myNumberEl = document.getElementById("myNumber").value;
    Restart()
    for(let i=0; i<myNumberEl; i++){
        random=characters[Math.floor(Math.random() * characters.length)]
        firstPasswordEl.textContent+=random
        random=characters[Math.floor(Math.random() * characters.length)]
        secondPasswordEl.textContent+=random
    }
}

function Restart(){
    firstPasswordEl.textContent =""
    secondPasswordEl.textContent =""
}