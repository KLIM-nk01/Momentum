const time = document.getElementById('time'),
    date = document.getElementById('date'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
const showAmPM = true;
const button = document.getElementById('background-slider');

let i = 0;


const imgMorning = ["img/morning/01.jpg", "img/morning/02.jpg", "img/morning/03.jpg",
    "img/morning/04.jpg", "img/morning/05.jpg", "img/morning/06.jpg", "img/morning/07.jpg",
    "img/morning/08.jpg", "img/morning/09.jpg", "img/morning/10.jpg", "img/morning/11.jpg",
    "img/morning/12.jpg", "img/morning/13.jpg", "img/morning/14.jpg", "img/morning/15.jpg",
    "img/morning/16.jpg", "img/morning/17.jpg", "img/morning/18.jpg", "img/morning/19.jpg",
    "img/morning/20.jpg"],
    imgDay = ["img/day/01.jpg", "img/day/02.jpg", "img/day/03.jpg",
        "img/day/04.jpg", "img/day/05.jpg", "img/day/06.jpg", "img/day/07.jpg",
        "img/day/08.jpg", "img/day/09.jpg", "img/day/10.jpg", "img/day/11.jpg",
        "img/day/12.jpg", "img/day/13.jpg", "img/day/14.jpg", "img/day/15.jpg",
        "img/day/16.jpg", "img/day/17.jpg", "img/day/18.jpg", "img/day/19.jpg",
        "img/day/20.jpg"],
    imgEvening = ["img/evening/01.jpg", "img/evening/02.jpg", "img/evening/03.jpg",
        "img/evening/04.jpg", "img/evening/05.jpg", "img/evening/06.jpg", "img/evening/07.jpg",
        "img/evening/08.jpg", "img/evening/09.jpg", "img/evening/10.jpg", "img/evening/11.jpg",
        "img/evening/12.jpg", "img/evening/13.jpg", "img/evening/14.jpg", "img/evening/15.jpg",
        "img/evening/16.jpg", "img/evening/17.jpg", "img/evening/18.jpg", "img/evening/19.jpg",
        "img/evening/20.jpg"],
    imgNight = ["img/night/01.jpg", "img/night/02.jpg", "img/night/03.jpg",
        "img/night/04.jpg", "img/night/05.jpg", "img/night/06.jpg", "img/night/07.jpg",
        "img/night/08.jpg", "img/night/09.jpg", "img/night/10.jpg", "img/night/11.jpg",
        "img/night/12.jpg", "img/night/13.jpg", "img/night/14.jpg", "img/night/15.jpg",
        "img/night/16.jpg", "img/night/17.jpg", "img/night/18.jpg", "img/night/19.jpg",
        "img/night/20.jpg"];

const rand = () => Math.random() - 0.5;

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const speed = document.querySelector('.wind-speed');
//Show Time

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');


function viewBgImage(data) {
   
    const src = data;
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {      
        document.body.style.backgroundImage = `url(${src})`;
    }; 
  }
  function getDayImg()
  {
    let dynamic = [...imgDay].sort(rand);
      const index = i % dynamic.length;
      const imageSrc = dynamic[index];
      viewBgImage(imageSrc);
      console.log('+')
      i++;
  }

  function getEveningImg()
{
    const index = i % imgEvening.length;
    const imageSrc =imgEvening[index];
    viewBgImage(imageSrc);
    i++;
}
function getMorningImg()
{
    const index = i % imgsMorning.length;
    const imageSrc =imgMorning[index];
    viewBgImage(imageSrc);
    i++;
}
function getNightmg()
{
    const index = i % imgNight.length;
    const imageSrc =imgNight[index];
    viewBgImage(imageSrc);
    i++;
}

function getBg()
{
  let arr = [];
  for (let i = 0; i <= 5; i++)
  {
    arr.push(imgMorning[Math.floor(Math.random()*imgMorning.length)]);
  }
  for (let i = 0; i <= 5; i++)
  {
    arr.push(imgDay[Math.floor(Math.random()*imgDay.length)]);
  }
  for (let i = 0; i <= 5; i++)
  {
    arr.push(imgEvening[Math.floor(Math.random()*imgEvening.length)]);
  }
  for (let i = 0; i <= 5; i++)
  {
    arr.push(imgNight[Math.floor(Math.random()*imgNight.length)]);
  }
  //console.log(arr)
  return arr;
}


const showSmth = (n) => {

  switch(n){
    case 'morning': i = 0;
    break;
    case 'day': i = 5;
    break;
    case "evening": i = 11;
    break;
    case 'night': i = 17;
    break;
  }
  return ++i
}



let arr  = getBg();
function setBgBtn(){
    button.onclick = null;

  let today = new Date();
    let hour = today.getHours();

    if(hour == 24 || hour < 6)
    {
      const index = i % arr.length;
      console.log('I"m here' ,i);
      const imageSrc = arr[index];
      viewBgImage(imageSrc);
      i++;
    }
    else if(hour < 12 ) {
      const index = i % arr.length;
      const imageSrc =arr[index];
      viewBgImage(imageSrc);
      i++;
    }
    else if (hour < 18) {

    const index = i % arr.length;
    const imageSrc = arr[index]
    viewBgImage(imageSrc);
    i++;
    console.log(i)
    }
  
    else {
      const index = i % arr.length;
      const imageSrc =arr[index];
      viewBgImage(imageSrc);
      i++;
    }

    setTimeout(() => {
        button.onclick = setBgBtn
    },1000)
}


function setBg()
{
    let today = new Date();
    let hour = today.getHours();
    if(hour == 24 || hour <= 6)
    {
        // document.body.style.backgroundImage = "url(assets/images/night.jpg)";
        getNightmg();
        showSmth("night")
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
    else if(hour <= 12 ) {
        // document.body.style.backgroundImage = "url(assets/images/morning.jpg)";
        getMorningImg();
        showSmth("morning")
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    }
    else if (hour < 18) {

        getDayImg();
        showSmth("day")
        greeting.textContent = 'Good Day';
    }
    else {
        // document.body.style.backgroundImage = "url(assets/images/evening.jpg)";
        getEveningImg()
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
        showSmth("evening")
       
    }
}


function showTime() {
    // let today = new Date(2020, 06, 10, 1, 30, 30)
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        seсond = today.getSeconds()


    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}
    <span>:</span>${addZero(seсond)}`;

    //${showAmPM ? amPm : 'PM'}

    setTimeout(showTime, 1000);
}


function showDate() {
    // let today = new Date(2020, 06, 10, 1, 30, 30)
    let today = new Date(),
        dateDay = today.getDate(),
        month = today.getMonth(),
        day = today.getDay(),
        year = today.getFullYear();


    switch (day) {
        case 1:
            day = 'Mon'
            break;
        case 2:
            day = 'Tue'
            break;
        case 3:
            day = 'Wed'
            break;
        case 4:
            day = 'Thu'
            break;
        case 5:
            day = 'Fri'
            break;
        case 6:
            day = 'Sat'
            break;
        case 7:
            day = 'Sun'
            break;
    }


    switch (month) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;
    }

    date.innerHTML = `${day}<span>, </span> ${dateDay} ${month} ${year}`;

    setTimeout(showDate, 1000);
}

//add Zeros

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.innerText = '[Enter name]';

    } else {

        name.innerText = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.key === 'Enter' && e.target.innerText !== '') {
            localStorage.setItem('name', e.target.innerText);

            name.blur();
        }
        if (e.key === 'Enter' && e.target.innerText === '') {
            name.blur();
            getName()
        }
    } else if (e.type === 'click') {
        e.target.innerText = '';
        name.focus();
    } else {
        getName()
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.innerText = '[Enter focus]';

    } else {

        focus.innerText = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.key === 'Enter' && e.target.innerText !== '') {
            localStorage.setItem('focus', e.target.innerText);

            focus.blur();
        }
        if (e.key === 'Enter' && e.target.innerText === '') {
            focus.blur();
            getFocus()
        }
    } else if (e.type === 'click') {
        e.target.innerText = '';
        focus.focus();
    } else {
        getFocus()
    }
}


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°c`;
    weatherDescription.textContent = data.weather[0].description;
    speed.textContent = `Wind speed: ${data.wind.speed} m/s`
}

function getCity() {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
        city.innerText = '[Enter City]';

    } else {

        city.innerText = localStorage.getItem('city');
    }
}

function setCity(e) {
    if (e.type === 'keypress') {
        if (e.key === 'Enter' && e.target.innerText !== '') {
            localStorage.setItem('city', e.target.innerText);
            getWeather();
            city.blur();
        }
        if (e.key === 'Enter' && e.target.innerText === '') {
            city.blur();
            getCity()
        }
    } else if (e.type === 'click') {
        e.target.innerText = '';
        city.focus();
    } else {
        getCity()
    }
}


async function getQuote() {
    const url = `https://type.fit/api/quotes`;
    const res = await fetch(url);
    
    const data = await res.json(); 
    let  randomIndex = Math.floor(Math.random() * 1000);
    blockquote.textContent = data[randomIndex].text;
    figcaption.textContent = data[randomIndex].author;
}


document.addEventListener('DOMContentLoaded', getQuote);
setTimeout(() => {
  btn.onclick = getQuote
},1000)

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
button.addEventListener('click', (e) => {
    // e.preventDefault();
    changeBackground();
});

button.onclick = setBgBtn;
setInterval(setBgBtn, 360000);

setBg();

//Run
showTime();
//setBgGreet();
getName();
getFocus()
showDate()
getWeather()
getCity()