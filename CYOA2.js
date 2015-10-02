/**
 * Created by session2 on 9/30/15.
 */

/* ----------CALL VARIABLES---------- */
var weapon = [];
var armor = [];
var userName = prompt("Welcome to Argantua: The leading online virtual fantasy combat game. Please wait while we scan your face...Done! What is your name?");
/* ----------CALL VARIABLES---------- */

//console.log(userName);

var pickTheWeapon = prompt("Welcome, " + userName + ", you are about to get into the most advanced virtual world available. Because you're entering for the first time, you need to select your character's weapon. Pick one out of the 3: LONGSWORD, DUAL KNIVES, or MACE?").toLowerCase();
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

var pickTheArmor = prompt("Now it's time to pick your armor. You have the choice between LIGHT cloth armor, MEDIUM leather armor, and HEAVY steel-plated armor.").toLowerCase();
if(pickTheArmor === "light"){
	var armor = "light armor";
}
else if (pickTheArmor === "medium") {
	var armor = "medium armor";
}
else if (pickTheArmor === "heavy") {
	var armor = "heavy armor";
}
else{
	var armor = "bareskin";
}

var logIn = confirm("Done! Your character, " + userName + " has been completed! Are you ready to log into Argantua?");