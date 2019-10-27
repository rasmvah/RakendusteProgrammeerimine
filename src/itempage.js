// alert("Hello world, you are on the item page!");

function setup(){
    console.log("Itempage setup function loaded.");
    const x = window.location;
    console.log(x);
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    const cost = urlParams.get("cost");
    const src = urlParams.get("src");
    console.log(title, cost, src);
    //alert("Title: " + title + " Cost: " + cost + " Source: " + src);

    const container = document.createElement("div");
    container.className = "itemContainer";

    const image = document.createElement("img");
    image.src = src;

    image.className = "item__image";

    const titleElement = document.createElement("h2");
    const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const textElement = document.createElement("p");
    const costElement = document.createElement("div");
    costElement.textContent = cost;
    costElement.className = "item__price";
    textElement.textContent = desc;
    textElement.className = "item__description";

    titleElement.textContent = title;
    titleElement.className = "item__title"
    console.log("image", image);
    container.append(titleElement);
    container.append(image);
    container.append(textElement);
    container.append(costElement);

    const app = document.getElementById("item-body");
    if(!app) return;
    app.append(container);
}

module.exports = {
    setup,
};
