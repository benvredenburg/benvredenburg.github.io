function responsive() {
    document.getElementsByClassName("nav-children")[0].classList.toggle("expand");
}

window.addEventListener('load', (event)=>{
    const cd = document.querySelector('#lastupdated');
    let day = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    ]
    let month = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'Novemeber', 
        'December'
    ]
    cd.textContent = day[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear();


    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const bd = document.querySelector('#banner');
        today = new Date().getDay();
            if(today != 5){
                bd.style.display = 'none';
        }
})