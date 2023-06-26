'use strict'
console.log(`this is a new script`)

const hour = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]

// get the Id and assign to a variable
const createContainer = document.getElementById("createContainer");
const containerTable = document.getElementById("containerTable");
const containerForms = document.getElementById("containerForms");

// allStore array to store all objects of the constructor function
const allStores = [];


// Generate random numbers for the customers each hour
function getRandom(max,min){
    const x = Math.floor(Math.random()*(max-min+1)+min);
    return x;
};

// add the time and last heading
function time(){
    const tr = document.createElement("tr")
    containerTable.appendChild(tr);

    const th = document.createElement("th");
    th.textContent = `Hours`;
    tr.appendChild(th);

for(let i = 0; i<= hour.length; i++){
    if(i != hour.length){
    const td = document.createElement("td")
    td.textContent= hour[i]
    tr.appendChild(td);}
    else{
        const td = document.createElement("td")
        td.textContent= 'Sum Totals'
        tr.appendChild(td);
    }
} 
};

//  Creates the totals of all the states 
function hourlyTotals() {
    const tr = document.createElement("tr")
    containerTable.appendChild(tr);

    const th = document.createElement("th");
    th.textContent = `Individual Total`;
    tr.appendChild(th);

    for (let i = 0; i < hour.length; i++) {
        const th = document.createElement("th");
        let hoursAdded = 0;
        for (let j = 0; j < allStores.length; j++) {
        const hourAmount = allStores[j].cookiesEachHour[i];
        hoursAdded += hourAmount;
        }
        th.textContent = hoursAdded;
        tr.appendChild(th);
    }
    
    let totalTotals = 0;
    for (let i = 0; i < allStores.length; i++) {
        totalTotals += allStores[i].totalDailyCookies;
    }
    
    const totalsCell = document.createElement("th");
    totalsCell.textContent = totalTotals;
    tr.appendChild(totalsCell);
    
    };


function City(name,minCust,maxCust,avgCookie){
    this.name= name,
    this.minCustPerHour = minCust,
    this.maxCustPerHour= maxCust,
    this.avgCookiesPerCust= avgCookie,
    this.customersEachHour = [],
    this.cookiesEachHour = [],
    this.totalDailyCookies =  0,
    this.calculateCustomerEachHour()
    this.calculateCookiesEachHour()
    this.pushStore()
    this.render()
    
};
//called time(heading) to render for the first time the code runs. without this there will be no heading on first run
time();

// This hasa the event listener to append the form details to the table after a submit.
containerForms.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(event)
    // console.log(`Hello`)

    // this clears the content of the table after each run and shows the new data.
    containerTable.innerHTML = ""


    // Anther time(heading) to make sure that the table repeat after the first run.
    time();
    

    // This picks the content of allStores and render it in a loop 
    for(let i = 0; i < allStores.length; i++){
        allStores[i].render();
    }

    // this the variables for the event listeners of all the inputs of the form
    const storeName = event.target.storeName.value;
    const minCustHourly = event.target.minCust.value;
    const maxCustHourly = event.target.maxCust.value;
    const avgCookies = event.target.avgCookies.value;

    // we created a new instance of the City Constructor function with the data from the event listener
    const newStore = new City(storeName,minCustHourly,maxCustHourly,avgCookies);
    
    // invoke the totals function
    hourlyTotals();

// Reset the content of the form  
containerForms.reset();

})



City.prototype.calculateCustomerEachHour = function(){
    for(let i = 0; i < hour.length; i++){
    const y = getRandom(this.maxCustPerHour,this.minCustPerHour);
    this.customersEachHour.push(y);
    // console.log(i,`this is for calculatecustomereachhour`)
}
};

City.prototype.calculateCookiesEachHour = function(){
    for(let i =0;i< hour.length; i++){
        const z = Math.ceil(this.avgCookiesPerCust * this.customersEachHour[i]);
        this.cookiesEachHour.push(z)
        this.totalDailyCookies += z;
    }
};

City.prototype.pushStore = function(){
    allStores.push(this);
    // console.log(allStores)
};









City.prototype.render = function(){
    

    // const article = document.createElement("article");
    // createContainer.appendChild(article);


    // const h3 = document.createElement("h3")
    // h3.textContent = `This is the data of all our store locations`
    // article.appendChild(h3);
   
    //Create a row and append to the table
    const tr = document.createElement("tr")
    containerTable.appendChild(tr);

    //create a header and append to trhe row
    const th = document.createElement("th");
    th.textContent = this.name;
    tr.appendChild(th);

    //create a data row, give it a value of cookiesEachHour, find the sum of all cookieseachhour and append it to the row
    let fTotal = 0;
    for(let i = 0; i< hour.length; i++){
        const td = document.createElement("td")
        td.textContent= this.cookiesEachHour[i]
        fTotal += this.cookiesEachHour[i]
        tr.appendChild(td);
    };

    // create total of each cookie per hour
    const total = document.createElement('th')
    total.textContent = fTotal;
    tr.appendChild(total);



}


const seattle = new City("Seattle",23,65,6.3);
const dubai = new City("dubai", 3, 24, 1.2);
const paris = new City("paris", 11, 38, 3.7);
const lima = new City("lima", 20, 38, 2.3);
const tokyo = new City("tokyo", 2, 16, 4.6);








