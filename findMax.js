var testArray = [16, 32, 74, 24, 87, 12];

for (var arrayPosition = 0;
    arrayPosition < testArray.length - 1; arrayPosition++) {
    var currentElement = testArray[arrayPosition];
    var nextElement = testArray[arrayPosition + 1];

    console.log("Testing " + currentElement + " and " + nextElement + "(greater than): " + (currentElement > nextElement));
    console.log("Testing " + currentElement + " and " + nextElement + "(less than): " + (currentElement < nextElement));
    if (currentElement > nextElement)
        return ("Maximum number in string: " + (currentElement));

    if (currentElement < nextElement)
        return ("Maximum number in string: " + (nextElement));

}