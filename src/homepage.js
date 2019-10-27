const utils = require("./utils.js");
const utils2 = require("./utils2.js");
console.log(utils2.addTwoNumbers(2,4));


console.log("itemsList.js loaded");
const phones = [{}];
const laptops = [{}];

const categories = {
    PHONE: "phones",
    LAPTOP: "laptops",
};

let selectedCategory = "categories.PHONE";

function createItems(){
    const root = document.getElementById("item-list");
    let items = [];
    root.innerHTML = null;

    if(selectedCategory === categories.PHONE){
        items = phones;
    }
    else if(selectedCategory === categories.LAPTOP){
        items = laptops;
    }

    console.log("items", items);

    items.forEach((item)=>{
        const element = utils.createItemElement(item);
        console.log("root", root);
        root.append(element);
    })
}

function CategoryListener(){
    const dropdown = document.getElementById("category-dd");
    dropdown.addEventListener("change", (event) =>{
        console.log(event.target.value);
        selectedCategory = [event.target.value];
        createItems();
        const result = document.querySelector("result");
        result.textContent = `Teile meeldivad ${event.target.value}`;
    })
}

function setup(){
    const root = document.getElementById("item-list");
    if(!root) return;
    createItems();
    CategoryListener();
}

module.exports = {
    setup,
};