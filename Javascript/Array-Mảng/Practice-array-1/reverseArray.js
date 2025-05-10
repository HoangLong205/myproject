var arr = [-3,5,1,3,2,10];
var first = 0;
var last = arr.length - 1;
while (first < last) {
    var temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    first++;
    last--;
}
console.log(arr);