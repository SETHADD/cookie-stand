


'use strict'
const hour = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]

const pickUp = document.getElementById("createContainer");


const seattle = {
    name: "Seattle",
    minCustPerHour: 34,
    maxCustPerHour: 55,
    avgCookiesPerCust: 3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,

    calculateCustomersEachHour : function(){
        for(let i = 0; i< hour.length; i++){
            const x = generate(this.minCustPerHour,this.maxCustPerHour);
            this.customersEachHour.push(x)
        }
    },


    calculateCookiesEachHour: function(){
        for(let i = 0; i< hour.length; i++){
            const soldPerHour = this.avgCookiesPerCust * this.customersEachHour[i];
            this.cookiesEachHour.push(soldPerHour);
            this.totalDailyCookies += soldPerHour;
            
        }    
    },

    show: function(){

        const article = document.createElement("article");
        pickUp.appendChild(article);

    const h3 = document.createElement("h3")
    h3.textContent=`This is the store for ${this.name}`
    article.appendChild(h3)



    const ul = document.createElement("ul")
    article.appendChild(ul)

    for(let i = 0; i< hour.length; i++){
        const li = document.createElement("li")
        li.textContent=`${hour[i]}: ${this.cookiesEachHour[i]} cookies`
        ul.appendChild(li)
    }
    }
};
seattle.show();

function generate(min,max){
    const guess = Math.floor(Math.random()*(max-min+1)+min);
    return guess;
}

seattle.calculateCustomersEachHour()
console.log(seattle.customersEachHour)

seattle.calculateCookiesEachHour();
console.log(seattle.cookiesEachHour)
console.log(seattle.totalDailyCookies)
