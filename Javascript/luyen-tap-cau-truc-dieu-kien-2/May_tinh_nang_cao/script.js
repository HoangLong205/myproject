let input = document.getElementById('input');

function inputVal(val) {
    input.value += val;
}

function result() {
    let result = eval(input.value);
    input.value = result;
}

function xoa() {
    input.value="";
}