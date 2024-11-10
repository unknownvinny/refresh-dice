function randomNum() {
    var num = Math.random();
    num = num * 6;
    num = Math.floor(num) + 1;
    return num;
}

var n1 = randomNum();
var n2 = randomNum();

var dice1 = document.querySelectorAll(".dice")[0].querySelector("img");
var dice2 = document.querySelectorAll(".dice")[1].querySelector("img");

dice1.setAttribute("src", "./assets/dice" + n1 + ".png")
dice2.setAttribute("src", "./assets/dice" + n2 + ".png")

if (n1 > n2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🎖️"
}
else if(n1 < n2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏅"
}
else {
    document.querySelector("h1").innerHTML = "Draw!!!"
}