async function getperson() {
    // const requestURL = 'js/person.json';
    const requestURL = 'https://benvredenburg.github.io/Extra/missing-persons/js/person.json'

    const response = await fetch(requestURL)
        .then(function(response) {
            if (response.status == 200) {

                return response.json();

            } else {
                throw new Error("No towns found: " + response.status)
            }
        }).then(function(jsobject) {
            console.log(jsobject)

            let info = document.createElement('section');
            let h2 = document.createElement('h2');
            let p5 = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p6 = document.createElement('p');
            let p7 = document.createElement('p');
            let p8 = document.createElement('p');
            let p9 = document.createElement('p');
            let p10 = document.createElement('p');

            h2.textContent = "Full name: " + jsobject[0].person.personal.name + " " + jsobject[0].person.personal.last_name;
            p5.textContent = "Password: ";
            p6.textContent = jsobject[0].person.online_info.password;
            p1.textContent = "Email: ";
            p7.textContent = jsobject[0].person.online_info.email;
            p2.textContent = "Eye Color: ";
            p8.textContent = jsobject[0].person.personal.eye_color;
            p3.textContent = "Resident of: ";
            p9.textContent = jsobject[0].person.personal.city + ", " + jsobject[0].person.personal.country;
            p4.textContent = "IP Address: ";
            p10.textContent = jsobject[0].person.online_info.ip_address;

            info.appendChild(h2);
            info.appendChild(p1);
            info.appendChild(p7);
            info.appendChild(p5);
            info.appendChild(p6);
            info.appendChild(p4);
            info.appendChild(p10);
            info.appendChild(p2);
            info.appendChild(p8);
            info.appendChild(p3);
            info.appendChild(p9);

            document.querySelector('#information').appendChild(info);
        });

}

window.addEventListener('load', (event) => {
    getperson();
})