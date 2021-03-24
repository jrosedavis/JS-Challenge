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

//Need to setup ADDITIONAL list items <li> tags in index.html to include city, state, country, and shape filters
//Be sure to up date 'id' and 'placeholder' information appropriate to every filter added
//
function runEnter() {
    d3.select("tbody").html("");
    d3.event.preventDefault();
    var inputElement1 = d3.select("#datetime").property("value");
    var inputElement2 = d3.select("#city").property("value").toLowerCase();
    var inputElement3 = d3.select("#state").property("value").toLowerCase();
    var inputElement4 = d3.select("#country").property("value").toLowerCase();
    var inputElement5 = d3.select("#shape").property("value").toLowerCase();

//Setup to filter through variable assigned to the data.js
mainFilter = tableData

if (inputElement1) {
    mainFilter = mainFilter.filter(ufosighting => ufosighting.datetime === inputElement1);
} 
if (inputElement2) {
    mainFilter = mainFilter.filter(ufosighting => ufosighting.city === inputElement2);
} 
if (inputElement3) {
    mainFilter = mainFilter.filter(ufosighting => ufosighting.state === inputElement3);
}
if (inputElement4) {
    mainFilter = mainFilter.filter(ufosighting => ufosighting.country === inputElement4);
} 
if (inputElement5) {
    mainFilter = mainFilter.filter(ufosighting => ufosighting.shape === inputElement5);
}

//Apply loop as above
mainFilter.forEach((ufosighting) => {
    console.log(ufosighting);
    var row = tbody.append("tr");
    
    Object.entries(ufosighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
