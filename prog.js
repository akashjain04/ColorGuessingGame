function getRandomInt(min, max) {
    min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
var colors = ["Aqua","Black","Brown","Blue","CadetBlue","Chocolate","DarkGrey","Gold","Indigo","MediumBlue","ForestGreen","Lime","OrangeRed","Orange","White","Silver"]
var length = colors.length;
var random_index = getRandomInt(0,length-1);
var randomColor = colors[random_index]
alert("Find the color " + colors[random_index])
for(var i=1;i<=length;i++){
   var id = "#b"+i;
   document.getElementById(id).style.backgroundColor = colors[i-1];
}
function buttonClicked(click_id){
   var i = click_id.split("b");
   var id = i[1];
   if(colors[id-1] == randomColor){
       document.getElementById("main-div").style.backgroundColor = randomColor;
       document.getElementById("msg").style.color = randomColor;
       document.getElementById("msg2").style.color = "black";
       alert("Congratulations!!! Right answer");
   }
   else{
       alert("Sorry. Try Again");
       document.getElementById("msg2").style.color = "Red";
   }
   
}