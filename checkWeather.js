const weatherSet = () => {
    const image = document.querySelector('.image')
    console.log(allData.data.weather[0].main);
    console.log(allData.data.weather[0].id);
    let aweathernumber = allData.data.weather[0].id;
    if (aweathernumber > '800') {
        image.setAttribute('src', './grafiki/clouds.png');
    } else if (aweathernumber == '800') {
        image.setAttribute('src', './grafiki/sun.png');
    } else if (aweathernumber >= '700') {
        image.setAttribute('src', './grafiki/fog.png');
    } else if (aweathernumber >= '600') {
        image.setAttribute('src', './grafiki/snow.png');
    } else if (aweathernumber >= '500') {
        image.setAttribute('src', './grafiki/rain.png');
    } else if (aweathernumber >= '300') {
        image.setAttribute('src', './grafiki/drizzle.png');
    } else if (aweathernumber >= '200') {
        image.setAttribute('src', './grafiki/thunderstorm.png');
    } else {
        image.setAttribute('src', './grafiki/unknown.png');
    }
}
