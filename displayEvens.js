function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["evenDog"].elements.length;
        loopCounter++) {
        if (document.forms["evenDog"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {

            documnet.forms["evenDog"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["evenDog"]["num1"].value;
    var num2 = document.forms["evenDog"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["evenDog"]["num1"].parentElemenet.className = "form-group has-error";
        document.forms["evenDog"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
        alert ("Num2 must be filled with a number.");
        document.forms["evenDog"]["num2"].parentElement.className = "form-group has-error";
        document.forms["evenDog"]["num2"].focus();
        return false;
    }
    if (num3 == "" || isNaN(num3)) {
        alert("num3must be filled with a number.");
        document.forms["evenDog"]["num3"].parentElement.className = "form-group has-error";
        document.forms["evenDog"]["num3"].focus();
        return false;
    }
    