let die = 0;
Math.floor(Math.random() * 6) + 1;
//Initialize the map
let diceCount = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
var count = 0;
//Roll the dice till count of 10 is reached
while (count != 10) {
    die = Math.floor(Math.random() * 6) + 1;
    count = updateDice(die);
}
//Print the dice count
console.log(diceCount);
var occurences = Array.from(diceCount.values());
var max = Math.max(...occurences);
var min = Math.min(...occurences);
console.log("Max occurrences = " + max);
console.log("Min occurrences = " + min);
diceCount.forEach((value, key) => {
    if (value == max) {
        console.log("Maximum number of occurrences is of : " + key + " occurring : " + value + " times");
    }
})
console.log("Minimum number of occurrences is of ");
diceCount.forEach((value, key) => {
    if (value == min) {
        console.log(key + " occurring : " + value + " times");
    }
})
//function to update the occurrences of given dice value
function updateDice(num) {
    var value = diceCount.get(num);
    value++;
    diceCount.set(num, value);
    return value;
}