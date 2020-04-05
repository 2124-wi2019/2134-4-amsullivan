//DO NOT MODIFY THE CODE BETWEEN THIS COMMENT
function calculateMyWeightOnAnotherPlanet(myWeight, otherPlanet) {
    myWeight = parseFloat(myWeight);
    if(isNaN(myWeight)) throw new Error ("Error: first argument must be a numeric value!");
    otherPlanet = otherPlanet.toUpperCase().trim();
    switch(otherPlanet) {
        case "MERCURY":
            return Number((myWeight * .38).toFixed(2));
        case "VENUS":
            return Number((myWeight * .91).toFixed(2));
        case "MARS":
            return Number((myWeight * .38).toFixed(2));
        case "JUPITER":
            return Number((myWeight * 2.34).toFixed(2));
        case "SATURN":
            return Number((myWeight * .93).toFixed(2));
        case "URANUS":
            return Number((myWeight * .92).toFixed(2));
        case "NEPTUNE":
            return Number((myWeight * 1.12).toFixed(2));
        default:
            throw new Error("Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only.");
    }
}
//AND THIS COMMENT
//WRITE YOUR TESTS BELOW
/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    4/4/2020
*/
//test 170 pounds on Mercury should be 64.60
test('170 pounds on Mercury should be 64.60', ()=> {
    expect(calculateMyWeightOnAnotherPlanet(170, 'Mercury')).toBe(64.60);
});
//test 170 poundds on Venus should be 154.70
test('170 poundds on Venus should be 154.70', ()=> {
    expect(calculateMyWeightOnAnotherPlanet(170, 'Venus')).toBe(154.70);
});
//test 170 pounds on Mars should be 64.60
test('170 pounds on Mars should be 64.60', ()=> {
    expect(calculateMyWeightOnAnotherPlanet(170, 'Mars')).toBe(64.60);
});
// test 170 pounds on Jupiter should be 397.80
test('170 pounds on Jupiter should be 397.80', ()=> {
    expect(calculateMyWeightOnAnotherPlanet(170, 'Jupiter')).toBe(397.80);
});
//test 170 pounds on Saturn should be 158.10
test('170 pounds on Saturn should be 158.10', ()=> {
    expect(calculateMyWeightOnAnotherPlanet(170, 'Saturn')).toBe(158.10);
});
//test 170 pounds on Uranus should be 156.40
test('170 pounds on Uranus should be 156.40', ()=> {
    expect(calculateMyWeightOnAnotherPlanet(170, 'Uranus')).toBe(156.40);
});
// test 170 pounds on Neptune should be 190.40
test('170 pounds on Neptune should be 190.40', ()=> {
    expect(calculateMyWeightOnAnotherPlanet(170, 'Neptune')).toBe(190.40);
});
// test Function throws an error in the event the second argument is not a planet
test('Function throws an error in the event the second argument is not a planet', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'dog');
    }).toThrowError('Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only.');
});
//test function desplays an error when user inputs a non-numeric string as the first argument
test('Funcion displays an error if the user inputs a non-numeric string as the first argument', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet('twenty two', 'Neptune');
    }).toThrowError('Error: first argument must be a numeric value!');
});
//test can pass the numeric string "170" and "neptune" and get back 190.40
test('Function can pass the numeric string "170" and "neptune"', ()=> {
    expect(calculateMyWeightOnAnotherPlanet("170", "neptune")).toBe(190.40);
});