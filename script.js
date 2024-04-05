


let mcrep = document.querySelector('.point-cost');
let parsedMcrep = parseFloat(mcrep.innerHTML);

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let happyMealCost = document.querySelector('.happyMeal-cost');
let parsedHappyMealCost = parseFloat(happyMealCost.innerHTML);
let happyMealLevel = document.querySelector(".happyMeal-level")
let happyMealIncrease = document.querySelector(".happyMeal-increase")
let parsedHappyMealIncrease = parseFloat(happyMealIncrease.innerHTML)

let mcStealCost = document.querySelector('.mcSteal-cost');
let parsedMcStealCost = parseFloat(mcStealCost.innerHTML);
let mcStealLevel = document.querySelector(".mcSteal-level")
let mcStealIncrease = document.querySelector(".mcSteal-increase")
let parsedMcStealIncrease = parseFloat(mcStealIncrease.innerHTML)

let maccuPartyCost = document.querySelector('.maccuParty-cost');
let parsedMaccuPartyCost = parseFloat(maccuPartyCost.innerHTML);
let maccuPartyLevel = document.querySelector(".maccuParty-level")
let maccuPartyIncrease = document.querySelector(".maccuParty-increase")
let parsedMaccuPartyIncrease = parseFloat(maccuPartyIncrease.innerHTML)


let mpcText = document.getElementById("mpc-text")
let mpsText = document.getElementById("mps-text")

let mpc = 1;
let mps = 0;





function incrementMcrep(){
    mcrep.innerHTML = Math.round(parsedMcrep += mpc);
    
}

function buyClicker(){
    if(parsedMcrep >= parsedClickerCost) {
        mcrep.innerHTML = Math.round (parsedMcrep -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        mpc += parsedClickerIncrease

        parsedClickerCost *= 1.50;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
        playSound("buyClickerSound");
    }
}

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.play();
    sound.volume = 0.2;
}

function buyHappyMeal(){
    if(parsedMcrep >= parsedHappyMealCost) {
        mcrep.innerHTML = Math.round (parsedMcrep -= parsedHappyMealCost);

        happyMealLevel.innerHTML ++

        parsedHappyMealIncrease = parseFloat((parsedHappyMealIncrease * 1.00).toFixed(2))
        happyMealIncrease.innerHTML = parsedHappyMealIncrease
        mps += parsedHappyMealIncrease

        parsedHappyMealCost *= 1.50;
        happyMealCost.innerHTML = Math.round(parsedHappyMealCost)
        
        
    }
}

function buyMcSteal(){
    if(parsedMcrep >= parsedMcStealCost) {
        mcrep.innerHTML = Math.round (parsedMcrep -= parsedMcStealCost);

        mcStealLevel.innerHTML ++

        parsedMcStealIncrease = parseFloat((parsedMcStealIncrease * 1.03).toFixed(2))
        mcStealIncrease.innerHTML = parsedMcStealIncrease
        mps += parsedMcStealIncrease

        parsedMcStealCost *= 1.20;
        mcStealCost.innerHTML = Math.round(parsedMcStealCost)
        
        
    }
}

function buyMaccuParty(){
    if(parsedMcrep >= parsedMaccuPartyCost) {
        mcrep.innerHTML = Math.round (parsedMcrep -= parsedMaccuPartyCost);

        maccuPartyLevel.innerHTML ++

        parsedMaccuPartyIncrease = parseFloat((parsedMaccuPartyIncrease * 1.03).toFixed(2))
        maccuPartyIncrease.innerHTML = parsedMaccuPartyIncrease
        mps += parsedMaccuPartyIncrease

        parsedMaccuPartyCost *= 2.50;
        maccuPartyCost.innerHTML = Math.round(parsedMaccuPartyCost)
        playSound("buyMaccuPartySound");
        document.getElementById("background").style.display = "block";
        
    }
}



setInterval(()=>{
parsedMcrep += mps /10
mcrep.innerHTML = Math.round(parsedMcrep)
mpcText.innerHTML = Math.round(mpc)
mpsText.innerHTML = Math.round(mps)
}, 100)




















