function isFriendLy(x, y) {
    if (getDivisorSum(x) === y && getDivisorSum(y) === x) {
        return true;
    }
    return false;
}

function getDivisorSum(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum;
}

let x = 220;
let y = 284;

console.log(isFriendLy(x, y))


