//Current number and win/lose var
var counter = 0;
var win = 0;
var lose = 0;
var targetNumber;
var arr;
var greenValue;
var redValue;
var blueValue;
var whiteValue;

function generateCrystal() {
    //Number to guess
    targetNumber = Math.floor(Math.random() * 51) + 50;
    $("#number-to-guess").text(targetNumber);
    //add vaule to crystal
    arr = [];
    for (var i = 1; i < 11; i++) {
        arr.push(i);
    }
    greenValue = arr[Math.floor(Math.random() * arr.length)];
    var index = arr.indexOf(greenValue);
    if (index > -1) {
        arr.splice(index, 1);
    }
    console.log(greenValue);
    redValue = arr[Math.floor(Math.random() * arr.length)];
    var index = arr.indexOf(redValue);
    if (index > -1) {
        arr.splice(index, 1);
    }
    console.log(redValue);
    blueValue = arr[Math.floor(Math.random() * arr.length)];
    var index = arr.indexOf(blueValue);
    if (index > -1) {
        arr.splice(index, 1);
    }
    console.log(blueValue);
    whiteValue = arr[Math.floor(Math.random() * arr.length)];
    var index = arr.indexOf(whiteValue);
    if (index > -1) {
        arr.splice(index, 1);
    }
    console.log(whiteValue);
    console.log(arr);
    // Now for the hard part. Creating multiple crystals each with their own unique number value.
    var greenCry = $("#green").html("<img src='assets/images/green.jpg' alt= 'green'>").addClass("crystal");
    greenCry.attr("data-crystalvalue", greenValue)
    var redCry = $("#red").html("<img src='assets/images/red.jpg' alt= 'red'>").addClass("crystal");
    redCry.attr("data-crystalvalue", redValue)
    var blueCry = $("#blue").html("<img src='assets/images/blue.jpg' alt= 'blue'>").addClass("crystal");
    blueCry.attr("data-crystalvalue", blueValue)
    var whiteCry = $("#white").html("<img src='assets/images/white.jpg' alt= 'white'>").addClass("crystal");
    whiteCry.attr("data-crystalvalue", whiteValue)

}
//reset function
function reset() {
    counter = 0;
    greenValue = 0;
    redValue = 0;
    blueValue = 0;
    whiteValue = 0;
    generateCrystal();


}
generateCrystal();

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.


    if (counter === targetNumber) {
        alert("You win!");
        win++;
        reset();
    } else if (counter >= targetNumber) {
        alert("You lose!!");
        lose++;
        reset();
    }
    $("#current-number").html("<h2>counter</h2>" + counter);
    $("#win").html("<h2>Win</h2>" + win);
    $("#lose").html("<h2>Lose</h2>" + lose);
});