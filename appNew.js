'use strict'
const hour = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]

const pickUp = document.getElementById("createContainer");
const tabs = document.getElementById("containerTable");

function getRandom(max,min){
    const x = Math.floor(Math.random()*(max-min+1)+min);
    return x;
}

function City(name){
    this.name= name,
    this.minCustPerHour = 34,
    this.maxCustPerHour= 55,
    this.avgCookiesPerCust= 3,
    this.customersEachHour = [],
    this.cookiesEachHour = [],
    this.totalDailyCookies =  0
};

City.prototype.calculateCustomerEachHour = function(){
    for(let i = 0; i < hour.length; i++){
    const y = getRandom(this.maxCustPerHour,this.minCustPerHour);
    this.customersEachHour.push(y);
}
}

City.prototype.calculateCookiesEachHour = function(){
    for(let i =0;1< hour.length; i++){
        const z = this.cookiesEachHour.push(this.avgCookiesPerCust * this.customersEachHour[i]);
        this.totalDailyCookies += z;
    }
}

City.prototype.show = function(){
    const article = document.createElement("article");
    pickUp.appendChild(article);


    const h2 = document.createElement("h2")
    h2.textContent = `This is the data of all our store locations`
    article.appendChild(h2);

    const table = document.createElement("table")
    tabs.appendChild(table);

    const row = document.createElement("tr")
    table.appendChild(row);

    const data = document.createElement("th");
    data.textContent = this.name;
    row.appendChild(data);


}