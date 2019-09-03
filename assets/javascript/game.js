//Number to guess
var targetNumber = Math.floor(Math.random() * 51) + 50;
$("#number-to-guess").text(targetNumber);
//Current number
var counter = 0;
//add vaule to crystal
var arr = [];
for (var i = 1; i < 11; i++) {
    arr.push(i);
}
//90% of the time no dul. number
var greenValue = arr[Math.floor(Math.random() * arr.length)];
arr.splice(greenValue - 1, 1);
console.log(greenValue);
var redValue = arr[Math.floor(Math.random() * arr.length)];
arr.splice(redValue - 1, 1);
console.log(redValue);
var blueValue = arr[Math.floor(Math.random() * arr.length)];
arr.splice(blueValue - 1, 1);
console.log(blueValue);
var whiteValue = arr[Math.floor(Math.random() * arr.length)];
arr.splice(whiteValue - 1, 1);
console.log(whiteValue);
console.log(arr);



// Now for the hard part. Creating multiple crystals each with their own unique number value.
$("#green").html("<img src='assets/images/green.jpg' alt= 'green'>").addClass("crystal");
$("#red").html("<img src='assets/images/red.jpg' alt= 'red'>").addClass("crystal");
$("#blue").html("<img src='assets/images/blue.jpg' alt= 'blue'>").addClass("crystal");
$("#white").html("<img src='assets/images/white.jpg' alt= 'white'>").addClass("crystal");

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
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter >= targetNumber) {
        alert("You lose!!");
    }

});