const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img')

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

            card.appendChild(h2);

            p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;

            card.appendChild(p1);

            p2.textContent = 'Place of Birth: ' +
                prophets[i].birthplace;

            card.appendChild(p2);

            image.setAttribute('src', prophets[i].imageurl);

            card.appendChild(image)

            document.querySelector('div.cards').appendChild(card);
        }
    });