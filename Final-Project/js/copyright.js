window.addEventListener('load', (event) => {
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();


})