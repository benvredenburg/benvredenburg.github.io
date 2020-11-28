const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Preston") {
                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                let eventTitle = document.createElement('h4')
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');

                h2.textContent = towns[i].name;

                town.appendChild(h2);

                h3.textContent = '"' + towns[i].motto + '"';

                town.appendChild(h3);

                p2.textContent = 'Year Founded: ' + towns[i].yearFounded;

                town.appendChild(p2);

                p3.textContent = 'Population: ' + towns[i].currentPopulation;

                town.appendChild(p3);

                p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

                town.appendChild(p4);

                eventTitle.textContent = 'Upcoming Events:';

                town.appendChild(eventTitle);

                event1.textContent = towns[i].events[0];

                town.appendChild(event1);

                event2.textContent = towns[i].events[1];

                town.appendChild(event2);

                event3.textContent = towns[i].events[2];

                town.appendChild(event3);

                document.querySelector('.preston').appendChild(town);

                image.setAttribute('src', 'images/rsz_preston.jpg');
                image.setAttribute('alt', towns[i].name)

                town.appendChild(image);




            }
            if (towns[i].name == "Soda Springs") {
                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                let eventTitle = document.createElement('h4')
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');

                h2.textContent = towns[i].name;

                town.appendChild(h2);

                h3.textContent = '"' + towns[i].motto + '"';

                town.appendChild(h3);

                p2.textContent = 'Year Founded: ' + towns[i].yearFounded;

                town.appendChild(p2);

                p3.textContent = 'Population: ' + towns[i].currentPopulation;

                town.appendChild(p3);

                p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

                town.appendChild(p4);

                eventTitle.textContent = 'Upcoming Events:';

                town.appendChild(eventTitle);

                event1.textContent = towns[i].events[0];

                town.appendChild(event1);

                event2.textContent = towns[i].events[1];

                town.appendChild(event2);

                event3.textContent = towns[i].events[2];

                town.appendChild(event3);

                document.querySelector('.soda-springs').appendChild(town);

                image.setAttribute('src', 'images/rsz_sodasprings.jpg');
                image.setAttribute('alt', towns[i].name)

                town.appendChild(image);


            }
            if (towns[i].name == "Fish Haven") {
                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                let eventTitle = document.createElement('h4')
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');

                h2.textContent = towns[i].name;

                town.appendChild(h2);

                h3.textContent = '"' + towns[i].motto + '"';

                town.appendChild(h3);

                p2.textContent = 'Year Founded: ' + towns[i].yearFounded;

                town.appendChild(p2);

                p3.textContent = 'Population: ' + towns[i].currentPopulation;

                town.appendChild(p3);

                p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

                town.appendChild(p4);

                eventTitle.textContent = 'Upcoming Events:';

                town.appendChild(eventTitle);

                event1.textContent = towns[i].events[0];

                town.appendChild(event1);

                event2.textContent = towns[i].events[1];

                town.appendChild(event2);

                event3.textContent = towns[i].events[2];

                town.appendChild(event3);

                document.querySelector('.fish-haven').appendChild(town);

                image.setAttribute('src', 'images/rsz_fishhaven.jpg');
                image.setAttribute('alt', towns[i].name)

                town.appendChild(image);


            }
        }
    });