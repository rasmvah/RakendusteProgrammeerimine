{
    const oddItemContainerClass = "result-row item-odd    ";
    const evenItemContainerClass = "result-row item-even    ";
    const items_odd = document.getElementsByClassName(oddItemContainerClass);
    const items_even = document.getElementsByClassName(evenItemContainerClass);

    const imageClass = "small-image";
    const itemImage = document.getElementsByClassName(imageClass);

    const MakeAndModelClass = "make_and_model";
    const itemMAM = document.getElementsByClassName(MakeAndModelClass);

    const itemYearClass = "year";
    const itemYear = document.getElementsByClassName(itemYearClass);

    Array.from(oddItemContainerClass).forEach(item =>{
        const images = item.getElementsByClassName(imageClass);
        if(images.length === 0) return;
        const image = images[0];
        console.log(images.length);
        console.log(image);
    });
    Array.from(evenItemContainerClass).forEach(item =>{
        const images = item.getElementsByClassName(imageClass);
        if(images.length === 0) return;
        const image = images[0];
        console.log(images.length);
        console.log(image);
    });
    console.log(items_odd, items_even, itemImage, itemMAM, itemYear);
}