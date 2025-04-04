var x = parseInt(prompt('Enter a number'));
var arr = [-3, 5, 1, 3, 2, 10];
var a = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
        var a = true;
        alert('value found at: ' + i);
        break
    }
}

if (!a){
    alert('value not found ');
}
