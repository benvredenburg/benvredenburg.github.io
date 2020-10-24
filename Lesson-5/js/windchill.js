window.addEventListener('load', (event)=>{
    let temp = document.querySelector('#temp').innerHTML;
    let speed = document.querySelector('#wind').innerHTML;
    let windchill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
    const wc = document.querySelector('#windchill');
    if (temp < 50 && speed > 3.0) {
        wc.textContent = 'Windchill: ' + windchill + '° F';
    }
    else {
        wc.textContent = 'Windchill: N/A'
    }
})