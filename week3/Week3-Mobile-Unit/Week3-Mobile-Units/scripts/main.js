//The variable units below equals the value that was entered in by the user in the input field on the Web page.
//The user must enter either "Gallons" or "Liters" and a number that is between 
//1 and 500 or else the invalid message appears below the input field.
//The variable convert is defined in the else statement below and equals the product of the number and the corresponding
//conversion constant depending on if the user selected Gallons or Liters.
//The resulting answer appears below the Update button on the Web page after it is clicked. 
function update(){
    var selectUnits=$('#selectUnits option:selected').text();
    var units=$("#units").val();
    var result=$('#result');
    const LITERS=3.78541;
    const GALLONS=0.264172;

    if (units.length===0 || $.isNumeric(units)===false || (499 < units || units < 1.0000001)){
        $('#unitsInvalid').text('Please enter a valid number between 1 and 500.');
    }
    else{
        $('#unitsInvalid').text('');
        let convert=(selectUnits=='Gallons'?units*LITERS + ' Liters':units*GALLONS + ' Gallons');
        result.text(units + ' ' + selectUnits + ' converts to ' + convert);
    }
}