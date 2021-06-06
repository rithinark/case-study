 

List = [
    "https://github.com/rithinark/case-study/blob/main/dice%20roll/static/images/dice1.png?raw=true",
    "https://github.com/rithinark/case-study/blob/main/dice%20roll/static/images/dice2.png?raw=true",
    "https://github.com/rithinark/case-study/blob/main/dice%20roll/static/images/dice3.png?raw=true",
    "https://github.com/rithinark/case-study/blob/main/dice%20roll/static/images/dice4.png?raw=true",
    "https://github.com/rithinark/case-study/blob/main/dice%20roll/static/images/dice5.png?raw=true",
    "https://github.com/rithinark/case-study/blob/main/dice%20roll/static/images/dice6.png?raw=true",
]
//accessing

let pl1Random = Math.round(Math.random()*6)
let pl2Random = Math.round(Math.random()*6)
document.getElementById("pl1-dice").setAttribute('src',List[pl1Random]);
document.getElementById("pl2-dice").setAttribute('src',List[pl2Random]);
 

setTimeout(()=>{
 if(pl1Random > pl2Random){
    document.querySelector("#winner").innerHTML= "player 1 wins"; 

 }
 
 else if (pl1Random === pl2Random){
   document.querySelector("#winner").innerHTML= "draw the match";
 }    
 
 else{
   document.querySelector("#winner").innerHTML= "player 2 wins"; 
  
}
},3000);
 
