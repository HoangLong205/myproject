//bai 1
let myColor = ["Red", "Green", "White", "Black"];
let myColer_join = myColor.join();
console.log(myColer_join);

// bai 2
let input = "024568";
let myNumber = input.split("");
let my_newNumber = myNumber[0];

for (var i = 1; i < myNumber.length; i++) {
    var pre = parseInt(myNumber[i - 1]);
    var cur = parseInt(myNumber[i]);

    if (pre % 2 == 0 && cur % 2 == 0) {
        my_newNumber += '-' + cur;
    } else {
        my_newNumber += cur;
    }
}
console.log(my_newNumber);