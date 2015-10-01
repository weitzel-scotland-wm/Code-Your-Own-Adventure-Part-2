/**
 * Created by session2 on 9/30/15.
 */

/* ----------CALL VARIABLES---------- */
var weapon = [];
var armor = [];
var userName = prompt("Welcome to Gargantua: The leading online virtual fantasy combat game. Please wait while we scan your face...Done! What is your name?");
/* ----------CALL VARIABLES---------- */

//console.log(userName);

var pickTheWeapon = prompt("Welcome, " + userName + ", you are about to get into the most advanced virtual world available. Because you're entering for the first time, you need to select your character's weapon. Pick one out of the 3: LONGSWORD, DUAL KNIVES, or MACE?");
if(pickTheWeapon === "longsword"){
    var weapon = "longsword";
}
else if(pickTheWeapon === "dual knives"){
    var weapon = "dual knives";
}
else if(pickTheWeapon === "glaive"){
    var weapon = "mace";
}
else{
    var weapon = "fists";
}

var pickTheArmor = prompt("Now it's time to pick your armor. You have the choice ");