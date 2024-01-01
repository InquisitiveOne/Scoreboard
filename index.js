// Reference the home-score id
//create a function for adding 1
//create a function for adding 2
//create a function for adding 3 
//make home-score accumulate scores

//home score section
let homeScore = document.getElementById("home-score") // gets the Home scorecard
let homeCount = 0 

homeScore.textContent = homeCount // set initial home-score value to 0 

function addOne() {
    homeCount += 1
    homeScore.textContent = homeCount 
}

function addTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function addThree() {
    homeCount = homeCount + 3
    homeScore.textContent = homeCount
}

//guest score section
let guestScore = document.getElementById("guest-score") // gets Guest scorecard
let guestCount = 0

guestScore.textContent = guestCount

function addOneGuest() {
    guestCount +=  1
    guestScore.textContent = guestCount
}

function addTwoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function addThreeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}


function resetScore() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}
