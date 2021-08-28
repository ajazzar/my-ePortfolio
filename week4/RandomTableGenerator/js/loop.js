let randomBK=['darkgreen', 'navy', 'maroon', 'black']; //globally because it is not inside of a function

function createTable(){
    let myTable=document.createElement('table');
    document.body.appendChild(myTable);
    document.body.style.backgroundColor=randomBK[Math.floor(Math.random()* randomBK.length)];
// This part of the function generates the 3 columns and the random numbers in each cell.
    for(let i=2; i<=100;i++){
        let currentRow=myTable.insertRow(-1);
        let firstCell=currentRow.insertCell(0);

        i=i*Math.floor(Math.random()*3 +1); //2 * random number of 1 to 4
        firstCell.innerHTML=i.toString();

        let secondCell=currentRow.insertCell(1);
        secondCell.innerHTML=(i*i).toString();

        let thirdCell=currentRow.insertCell(2);
        thirdCell.innerHTML=(i*i*i).toString();
    }
// I used the next two lines of code to count the number of values generated and to create a label with that number included.
    var x = document.getElementsByTagName("td").length; 
    document.getElementById("data").innerHTML = "Found " + x + " values in the table.";
}
// This function removes the table and creates a new table by calling the function createTable() above.
function regenerate(){
    let myTable=document.getElementsByTagName("table");
    document.body.removeChild(myTable[0]);
    createTable();
}
