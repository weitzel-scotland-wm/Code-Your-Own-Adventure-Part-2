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
    weapon.push("longsword");
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

var logIn = confirm("Done! Your character, " + userName + " has been completed with the following weapons and armor: "+weapon+" and "+armor+". Are you ready to log into Argantua?");

if(logIn === false){
	var quickReload = function(){
		location.reload();
	}
}

alert("Your character disappears from in front of you and the lights all fade to black. You feel a light feeling in your stomach as you fall down slowly at first. The feeling gets stronger as you accelerate downwards towards a landmass below you. You can see the sunset now on the horizon and you now start to feel yourself slowing down as you gently land on the grassy hill below you. What you're looking at is Argantua --- A small portion of it.");
alert("You decide to walk on, following the path that has been stamped out by the other users of Argantua. As you get familiar with the controls and landscape, you decide to quicken your pace. Eventually you're running; virtual reality has never felt so good and you realize running is a lot of fun when you don't get tired. You spin and you don't get dizzy, you jump higher than you normally can in the real world.");
alert("Through your moment of absolute bliss, you accidentally smack into something, something hard. Being knocked to your back didn't feel too good and you now understand that pain exists in this world even if you don't get tired from running. You look up to see what you knocked into and you see a ferocious looking fiend. It stands a head taller than you and is pounding the ground in anger.");

var fiendStartFight = prompt("Do you want to FIGHT the fiend? or RUN away?").toLowerCase();

if(fiendStartFight === "fight") {
    if(armor === "bareskin"){
        alert("Because you decided to not pick an armor, the have no advantage in the fight. You run straight at the fiend only to be killed in one hit.");
    }
    else{
        var slaying = true;
        while(slaying === true){
            
        }
    }

}
else if(fiendStartFight === "run"){
	if(armor === "light armor"){
        confirm("Because you decided to pick light armor, you can run fast enough to escape the fiend and you run far enough to where the fiend decides it's not worth it to chase you.");
    }
    else if(armor === "medium armor" ){
        confirm("Your choice in medium armor wasn't the best, but it's light enough to escape the fiend. You barely escape its attempts to catch you.");
    }
    else{
        confirm("Because of your heavy plate armor, you aren't able to escape the fiend in time. He grabs you and kills you in one bite.");
    }

}
else{
    alert("Due to your indecisiveness the fiend grabs onto you, lifts you into the air and smashes you into the ground. Killing your character.");
    confirm("You are dead. GAME OVER.");
}

