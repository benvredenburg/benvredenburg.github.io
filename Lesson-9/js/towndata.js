const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        let town = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        h2.textContent = towns[4].name;

        town.appendChild(h2);

        h3.textContent = '"' + towns[4].motto + '"';

        town.appendChild(h3);

        p2.textContent = 'Year Founded: ' + towns[4].yearFounded;

        town.appendChild(p2);

        p3.textContent = 'Population: ' + towns[4].currentPopulation;

        town.appendChild(p3);

        p4.textContent = 'Annual Rain Fall: ' + towns[4].averageRainfall;

        town.appendChild(p4);



        document.querySelector('.preston').appendChild(town);


    });

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        let town = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        h2.textContent = towns[5].name;

        town.appendChild(h2);

        h3.textContent = '"' + towns[5].motto + '"';

        town.appendChild(h3);

        p2.textContent = 'Year Founded: ' + towns[5].yearFounded;

        town.appendChild(p2);

        p3.textContent = 'Population: ' + towns[5].currentPopulation;

        town.appendChild(p3);

        p4.textContent = 'Annual Rain Fall: ' + towns[5].averageRainfall;

        town.appendChild(p4);



        document.querySelector('.soda-springs').appendChild(town);


    });

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        let town = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        h2.textContent = towns[1].name;

        town.appendChild(h2);

        h3.textContent = '"' + towns[1].motto + '"';

        town.appendChild(h3);

        p2.textContent = 'Year Founded: ' + towns[1].yearFounded;

        town.appendChild(p2);

        p3.textContent = 'Population: ' + towns[1].currentPopulation;

        town.appendChild(p3);

        p4.textContent = 'Annual Rain Fall: ' + towns[1].averageRainfall;

        town.appendChild(p4);



        document.querySelector('.fish-haven').appendChild(town);


    });