//write you code between this comment
/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    4/4/2020
*/
function convertToMetric(imperial, conversion) {
    imperial = parseFloat(imperial);
    if(isNaN(imperial)) throw new Error ("Error: The first argument must be a numeric value!");
    conversion = conversion.toUpperCase().trim();
    switch(conversion){
        case "LITERS":
            return Number((imperial / 0.26417).toFixed(2));
        case "METERS":
            return Number((imperial / 3.2808).toFixed(2));
        default:
            throw new Error("Error: Second argument must be 'liters' or 'meters' only")
    }
}

//and this comment
//do not modify any code beneath this line

test("Let's convert 10 gallons to liters", ()=> {
    expect(convertToMetric(10, "liters")).toBe(37.85);
});
test ("Let's convert 10 feet to meters", ()=>{
    expect(convertToMetric(10, "meters")).toBe(3.05);

});
test("Let's make sure we get an error if we pass a value other than a number in as the first argument", ()=> {
    expect(()=> {
        convertToMetric("Test", "Meters");
    }).toThrowError("Error: The first argument must be a numeric value!");
});
test("Let's make sure we get an error if we pass a value other than 'liters' or 'meters' as the second argument", ()=>{
    expect(()=> {
        convertToMetric(43, "test");
    }).toThrowError("Error: Second argument must be 'liters' or 'meters' only");
});
test("Let's make sure our conversion works if we input a string containing a number as the first argument", ()=>{
    expect(convertToMetric("10", "meters")).toBe(3.05);
});