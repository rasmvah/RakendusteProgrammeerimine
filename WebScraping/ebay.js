{
    const itemClass = "s-item   ";
    const itemTitleClass = "s-item__title";
    const itemPriceClass = "s-item__price";
    const itemMileageClass = "s-item__dynamic s-item__dynamicAttributes2";
    const itemImageClass = "s-item__image";

    const items = document.getElementsByClassName(itemClass);

    const category = document.title.split("|")[0].trim(0);

    const array = [];

    Array.from(items).forEach(item =>{
        const images = document.getElementsByClassName(itemImageClass);
        if(images.length === 0) return;
        const image = images[0];

        const src = image.src;

        if(!src) return;

        const itemTitle = item.getElementsByClassName(itemTitleClass)[0].textContent;
        const itemPrice = item.getElementsByClassName(itemPriceClass)[0].textContent;
        const itemMileage = item.getElementsByClassName(itemMileageClass)[0].textContent;

        array.push({
            image:src,
            itemTitle,
            itemPrice,
            itemMileage,
            category,
        })
    });
    console.log(JSON.stringify(array));
}