function chuyendoi() {
    var doC = document.getElementById("c").value;
    var doF = (9*doC / 5) + 32;
    document.getElementById("result").innerHTML = "Result is: " + doF;
}