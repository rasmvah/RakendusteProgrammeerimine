const phones = [{}];
const laptops = [{}];

function createItems(){
    const root = document.getElementById("item-list");
    phones.forEach((phone)=>{
        const element = createItemElement(phone);
        root.append(element);
    })
}

function createItemElement(item){
    const anchor = document.createElement("a");
    anchor.href = `item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`;
    const itemContainer = document.createElement("div");
    itemContainer.className = "item";
    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;
    const titleElement = document.createElement("div");
    titleElement.className = "item__title";
    titleElement.textContent = item.title;
    const priceElement = document.createElement("div");
    priceElement.innerText = item.price;
    priceElement.className = "item__price";
    

    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    itemContainer.append(titleElement);
    itemContainer.append(priceElement);

    return anchor;
}

window.addEventListener("load", () =>{
    console.log("Hello World!");
    createItems;
});

