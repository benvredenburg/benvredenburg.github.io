function responsive() {
    document.getElementsByClassName("nav-children")[0].classList.toggle("expand");
}

window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const bd = document.querySelector('#banner');
        today = new Date().getDay();
            if(today != 5){
                bd.style.display = 'none';
        }
})