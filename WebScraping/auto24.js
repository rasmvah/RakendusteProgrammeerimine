{
    const oddItemContainerClass = "result-row item-odd    ";
    const evenItemContainerClass = "result-row item-even    ";
    const imageClass = "small-image";
    const MakeAndModelClass = "make_and_model";
    const itemYearClass = "year";
    const itemFuelClass = "fuel";
    const itemTransmissionClass = "transmission";
    const itemPriceClass = "price";
    const odd = document.getElementsByClassName(oddItemContainerClass);
    const even = document.getElementsByClassName(evenItemContainerClass);

    const arr1 = [];
    const arr2 = [];

    Array.from(odd).forEach(item =>{
        const images = item.getElementsByClassName(imageClass);
        if(images.length === 0) return;
        const image = images[0];
        const src = image.src;
        if(!src) return;
        arr1.push({
            image:src,
            MakeAndModelClass,
            itemYearClass,
            itemFuelClass,
            itemPriceClass,
            itemTransmissionClass,
        });
        console.log(JSON.stringify(arr1));
    });
    Array.from(even).forEach(item =>{
        const images = item.getElementsByClassName(imageClass);
        if(images.length === 0) return;
        const image = images[0];
        const src = image.src;
        if (!src) return;
        arr2.push({
            image:src,
            MakeAndModelClass,
            itemYearClass,
            itemFuelClass,
            itemPriceClass,
            itemTransmissionClass,
        });
        console.log(JSON.stringify(arr2));
    });
}