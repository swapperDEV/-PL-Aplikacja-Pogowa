let city;


const search = document.querySelector('.citys');
const input = document.querySelector('.city');
const error = document.querySelector('.error')
const searchFunc = () => {
    if(input.value == '') {
        Swal.fire(
            'Error! 001',
            'I dont know where is this city!',
            'error'
          )
    }
    else if(input.value.match(/[0-9]/)) {
        Swal.fire(
            'ERROR! 005',
            'Why you input Numbers?!',
            'error'
          )
    }
    else {
        console.log('Prawidlowo');
        city = input.value;


        searchWeather()
        closeSearch()
        setTimeout(()=>{
            weatherOutput()
        }, 1000)
    }
}
search.addEventListener('click', searchFunc);
document.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        console.log('enter');
        searchFunc();
    }
})
let allData;
const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&APPID=1aaad6a18b20c8863689f6dac69e8788'
const units = '&units=metric'
const lang = '&lang=pl'
//const units = '&units=imperial'

const searchWeather = () => {
url = apiLink + city + apiKey + units + lang
axios.get(url)
    .then(res => {
        allData = res;
        console.log(allData);
    })
    .catch(() => {
        console.log('Zła nazwa miasta')
        Swal.fire(
            'Error 003!',
            'I dont know where is this city!',
            'error'
          )
    })
}
