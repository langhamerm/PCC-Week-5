var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

function flip(result) {
    var randomNum = Math.floor(Math.random() * 2);

    if (randomNum === 0) {
        $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg'>")
    }
    else {
        $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg'>");
    }

    if (result === randomNum) {
        wins++;
        $("#win-lose").html("<h2>WINNNER!!!!</h2>");
        $("#wins").html(`<h3>${wins}</h3>`);
    }
    else {
        losses++;
        $("#win-lose").html("<h2>LOSER!!!!</h2>");
        $("#losses").html(`<h3>${losses}</h3>`);
    }

}

$("#heads").on("click", function() {
    headsCount++;
    $("#heads-chosen").text(headsCount);
    $("#guess").html("<h1>HEADS</h1>");
    flip(0);
});

$("#tails").on("click", function() {
    tailsCount++;
    $("#tails-chosen").text(tailsCount);
    $("#guess").html("<h1>TAILS</h1>");
    flip(1);
});