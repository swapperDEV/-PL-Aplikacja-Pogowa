const weatherOutput = () => {
    console.log('Tworze pogode');
    const appOutput = document.querySelector('.output')
    const cityName = document.createElement('b');
    const cityLogo = document.createElement('i');
    const wind = document.querySelector('.wind');
    const temp = document.querySelector('.temp')
    cityLogo.classList.add('fas')
    cityLogo.classList.add('fa-university')
    cityName.textContent = allData.data.name
    wind.textContent = allData.data.wind.speed.toFixed(0) + 'Km/h'
    temp.textContent = allData.data.main.temp.toFixed(0) + 'C°'
    cityName.style.opacity = '0';
    appOutput.appendChild(cityName)
    cityName.appendChild(cityLogo)
    const stats = document.querySelector('.stats')
    weatherSet();
    setTimeout(()=>{
        cityName.style.opacity = '1';
        stats.style.opacity = '1';
    }, 300)
}