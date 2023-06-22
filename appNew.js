'use strict'
console.log(`this is a new script`)

const hour = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]

const createContainer = document.getElementById("createContainer");
const containerTable = document.getElementById("containerTable");


function getRandom(max,min){
    const x = Math.floor(Math.random()*(max-min+1)+min);
    return x;
};

function City(name,minCust,maxCust,avgCookie){
    this.name= name,
    this.minCustPerHour = minCust,
    this.maxCustPerHour= maxCust,
    this.avgCookiesPerCust= avgCookie,
    this.customersEachHour = [],
    this.cookiesEachHour = [],
    this.totalDailyCookies =  0,
    this.calculateCustomerEachHour(),
    this.calculateCookiesEachHour(),
    this.render()
    
};

City.prototype.calculateCustomerEachHour = function(){
    for(let i = 0; i < hour.length; i++){
    const y = getRandom(this.maxCustPerHour,this.minCustPerHour);
    this.customersEachHour.push(y);
    console.log(i,`this is for calculatecustomereachhour`)
}
};

City.prototype.calculateCookiesEachHour = function(){
    for(let i =0;i< hour.length; i++){
        const z = Math.ceil(this.avgCookiesPerCust * this.customersEachHour[i]);
        this.cookiesEachHour.push(z)
        this.totalDailyCookies += z;
    }
};

City.prototype.render = function(){

    
    

    // const article = document.createElement("article");
    // createContainer.appendChild(article);


    // const h3 = document.createElement("h3")
    // h3.textContent = `This is the data of all our store locations`
    // article.appendChild(h3);

    const tr = document.createElement("tr")
    containerTable.appendChild(tr);

    const th = document.createElement("th");
    th.textContent = this.name;
    tr.appendChild(th);

    for(let i = 0; i< hour.length; i++){
        const td = document.createElement("td")
        td.textContent= this.cookiesEachHour[i]
        tr.appendChild(td);
    };

    const total = document.createElement('th')
    total.textContent = this.totalDailyCookies
    tr.appendChild(total);

    // containerTable.appendChild(tr);

}

const seattle = new City("Seattle",23,65,6.3);
const dubai = new City("dubai", 3, 24, 1.2);
const paris = new City("paris", 11, 38, 3.7);
const lima = new City("lima", 20, 38, 2.3);
const tokyo = new City("tokyo", 2, 16, 4.6);
const totals = new City("totals", 59, 181, 18.1);



