const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Soda Springs") {
                let events = document.createElement('section');
                let eventTitle = document.createElement('h3')
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');



                eventTitle.textContent = 'Upcoming Events:';

                events.appendChild(eventTitle);

                event1.textContent = towns[i].events[0];

                events.appendChild(event1);

                event2.textContent = towns[i].events[1];

                events.appendChild(event2);

                event3.textContent = towns[i].events[2];

                events.appendChild(event3);

                document.querySelector('.soda-springs').appendChild(events);






            }

        }
    });