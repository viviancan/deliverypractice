"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-sm-4">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';

    for(var i = 0; i <= coffees.length -1 ; i++) {
        html += renderCoffee(coffees[i]);
    }

    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];

    if(selectedRoast === "all"){
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e){
    console.log(e);
    e.preventDefault();
    var coffeeSearchInput = document.getElementById("coffeeInput").value;
    console.log(coffeeSearchInput);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.name.toLowerCase()).includes(coffeeSearchInput.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if (coffeeSearchInput === "") {
            filteredCoffees = coffees;
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearchInput = document.querySelector('#coffeeInput');

tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);

coffeeSearchInput.addEventListener('input', searchCoffees)

roastSelection.addEventListener('change',updateCoffees);