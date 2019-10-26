//const phones =
//const laptops =

window.addEventListener("load", () =>{
    console.log("Hello World!");
    const app = document.getElementById("item-body");
    app.append(container);
});

function createItems(){
    const root = document.getElementById("item-list");
    phones.forEach((phone)=>{
        const element = createItemElement(phone);
        root.append(element);
    })
}