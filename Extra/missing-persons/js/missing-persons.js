async function getperson() {
    const requestURL = 'https://pipl.ir/v1/getPerson';

    const response = await fetch(requestURL)
        .then(function(response) {
            if (response.status == 200) {
                return response.json();

            } else {
                throw new Error("No towns found: " + response.status)
            }
        })
    let info = document.createElement('section');
    let h2 = document.createElement('h2');
    let p5 = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    h2.textContent = "Full name: " + response.person.personal.name + response.person.personal.last_name;
    p5.textContent = "Password: " + response.person.online_info.password;
    p1.textContent = "Email: " + response.person.online_info.email;
    p2.textContent = "Eye Color: " + response.person.personal.eye_color;
    p3.textContent = "Resident of: " + response.person.personal.city + response.person.personal.country;
    p4.textContent = "IP Address: " + response.person.online_info.ip_address;

    info.appendChild(h2);
    info.appendChild(p);
    info.appendChild(p1);
    info.appendChild(p2);
    info.appendChild(p3);
    info.appendChild(p4);

    document.querySelector('#information').appendChild(info);


}

window.addEventListener('load', (event) => {
    getperson();
})