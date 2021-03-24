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
//DateTime
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
} else {
    return "No UFO Sightings Reported...";
}


// if (inputElement2) {
//     mainFilter = mainFilter.filter(ufosighting => ufosighting.city === inputElement2);
// } else {
//     inputElement2 = "No UFO Sightings Reported..."
// }
// if (inputElement3) {
//     mainFilter = mainFilter.filter(ufosighting => ufosighting.state === inputElement3);
// } else {
//     inputElement3 = "No UFO Sightings Reported..."
// }
// if (inputElement4) {
//     mainFilter = mainFilter.filter(ufosighting => ufosighting.country === inputElement4);
// } else {
//     inputElement4 = "No UFO Sightings Reported..."
// }
// if (inputElement5) {
//     mainFilter = mainFilter.filter(ufosighting => ufosighting.shape === inputElement5);
// } else {
//     inputElement5 = "No UFO Sightings Reported..."
// }

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
