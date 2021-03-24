// from data.js
var tableData = data;

//Get reference to the table
var tbody = d3.select("tbody");
console.log(data);

//Apply a loop to iterate through the data and console.log for every sighting
//Use D3 to append one table row 'tr' for each ufo sighting
tableData.forEach((ufosighting) => {
    console.log(ufosighting);
    var row = tbody.append("tr");

    //Use Object to loop through the key val
    Object.entries(ufosighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

//'Date form' to listen for 'events'
var button = d3.select("#filter-btn");

//Set up event handlers for accessing the search/filter button
button.on("click", runEnter);

//NOTE - CHECK 14.3.9 FOR REFERENCE
//Set up the function to run the events assigned above
function runEnter() {
    d3.select("tbody").html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime").property("value");
    console.log(inputElement);

    var filteredData = tableData.filter(ufosighting => ufosighting.datetime === inputElement);
    console.log(filteredData);

//Apply loop as above
filteredData.forEach((ufosighting) => {
    console.log(ufosighting);
    var row = tbody.append("tr");
    
    Object.entries(ufosighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
};