 

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
 
// rpaniten random number uh love calculator bmi calculator la paniyachey
//fb like button antha mathri click pana like color ila antha mathri eriyanum again click pana ponum
//vera ena iruku unga molaila avalo use panni solungalen perusa soliruva :Dunga moola sze vena en moola size pothum en moolayum sirusu tha hahaha seri ok inaiku eppadiyo mudistom nxt en clg ppt clg class la ipovum nadakutha  ama ama njy haha oru quiz game eppadi oru 
//idea?  ithum perusa tha irukum polaama ama  last anupunathu? athu ena per per la thrla  ila ena athula pandrathu.. range vechu panina amount yerumaa ama ithayum panitingala ena ila ila range use panirken aana athua number add pandrathu ithu apo doubts iruku apo ithayae panirunga hehe done ye okiee  okj done ye polama 
//js la ena topic ini ungaluku?  async await vanthrucha?
//https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8 itha panunga antha slide pana athula irukra value melayo kilayo sidleayo katanum avlotha