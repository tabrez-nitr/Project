let homeScore=document.getElementById("home-score")
let countHomeScore=0
//homeScore.innerText=5
let guestScore=document.getElementById("guest-score")
let countGuestScore=0

function homeAddOne()
{
    countHomeScore+=1
    homeScore.innerText=countHomeScore
}
function homeAddTwo()
{
    countHomeScore+=2
    homeScore.innerText=countHomeScore
}
function homeAddThree()
{
    countHomeScore+=3
    homeScore.innerText=countHomeScore
}




function guestAddOne()
{
    countGuestScore+=1
    guestScore.innerText=countGuestScore
}
function guestAddTwo()
{
    countGuestScore+=2
    guestScore.innerText=countGuestScore
}
function guestAddThree()
{
    countGuestScore+=3
    guestScore.innerText=countGuestScore
}

function newGame()
{
    countHomeScore=0
    countGuestScore=0
    guestScore.innerText=countGuestScore
    homeScore.innerText=countHomeScore

}