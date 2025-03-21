function MoneyConvert() {
    var Amount = parseFloat(document.getElementById("amount").value);
    var From = document.getElementById("from").value;
    var To = document.getElementById("to").value;
    var result_after_converted;

    if (From == "vnd" && To == "usd") {
        result_after_converted = "Result: " + Amount / 23000 + " $";
    }
    else if (From == "usd"  && To == "vnd") {
        result_after_converted =
            "Result: " + Amount * 23000 + " Đồng";
    }
    else if (From == "usd"  && To == "usd") {
        result_after_converted = "Result: " + Amount + " $";
    }
    else {
        result_after_converted = "Result: " + Amount + " Đồng";
    }

    document.getElementById("result").innerHTML = result_after_converted;
}