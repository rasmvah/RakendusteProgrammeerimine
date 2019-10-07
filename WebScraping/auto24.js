{
    const oddItemContainerClass = "result-row item-odd    ";
    const evenItemContainerClass = "result-row item-even    ";
    const imageClass = "pictures";
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
        const MakeAndModel = item.getElementsByClassName(MakeAndModelClass);
        const ProdYear = item.getElementsByClassName(itemYearClass);
        const VehicleFuel = item.getElementsByClassName(itemFuelClass);
        const VehicleTransmission = item.getElementsByClassName(itemTransmissionClass);
        const VehiclePrice = item.getElementsByClassName(itemPriceClass);
        console.log(images.length);
        console.log(image);
        console.log(MakeAndModel);
        console.log(ProdYear);
        console.log(VehicleFuel);
        console.log(VehicleTransmission);
        console.log(VehiclePrice);
    });
    Array.from(even).forEach(item =>{
        const images = item.getElementsByClassName(imageClass);
        if(images.length === 0) return;
        const image = images[0];
        const MakeAndModel = item.getElementsByClassName(MakeAndModelClass);
        const ProdYear = item.getElementsByClassName(itemYearClass);
        const VehicleFuel = item.getElementsByClassName(itemFuelClass);
        const VehicleTransmission = item.getElementsByClassName(itemTransmissionClass);
        const VehiclePrice = item.getElementsByClassName(itemPriceClass);
        console.log(images.length);
        console.log(image);
        console.log(MakeAndModel);
        console.log(ProdYear);
        console.log(VehicleFuel);
        console.log(VehicleTransmission);
        console.log(VehiclePrice);
    });
}