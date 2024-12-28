var randomNumber1=Math.floor(Math.random()*6)+1
var randomNumber2=Math.floor(Math.random()*6)+1



var image=document.getElementsByTagName("img")[0]
image.setAttribute("src","./images/dice"+randomNumber1+".png")
var image2=document.getElementsByTagName("img")[1]
image2.setAttribute("src","./images/dice"+randomNumber2+".png")



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText="player 1 wins";
    
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText="player 2 wins";
}
else{
    document.querySelector("h1").innerText="Draws";
}