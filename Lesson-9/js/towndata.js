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

                document.querySelector('.preston').appendChild(town);

                image.setAttribute('src', 'images/rsz_preston.jpg');

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

                document.querySelector('.soda-springs').appendChild(town);

                image.setAttribute('src', 'images/rsz_sodasprings.jpg');

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

                document.querySelector('.fish-haven').appendChild(town);

                image.setAttribute('src', 'images/rsz_sodasprings.jpg');

                town.appendChild(image);


            }
        }
    });