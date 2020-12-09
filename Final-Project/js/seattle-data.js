let requestURL = 'templedata.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let templeData = request.response;
    templeSeattle(templeData);
}

function templeSeattle(jsonObj) {
    let temples = jsonObj['temples']
    let i = 0;
    let name = temples[i].name;

    for (i = 0; i < temples.length; i++) {
        let name = temples[i].name;
        if (name == "Seattle") {
            let image = "<source srcset='" + temples[i].imageSrcSmall + "' media='(max-width: 700px)'> <img src='" + temples[i].imageSrc + "' class='featured' alt='" + temples[i].imageAlt + "'>";

            document.getElementById("templeImage").innerHTML = image;

            let phone = temples[i].phoneNumber;

            document.getElementById("phone").innerHTML = phone;

            let address = temples[i].streetAddress + ", " + temples[i].cityState + " " + temples[i].zip;

            document.getElementById("address").innerHTML = address;

            let description = temples[i].description;

            document.getElementById("description").innerHTML = description;

            document.getElementById("services").innerHTML = "<li>" + temples[i].services[0] + "</li> <li>" + temples[i].services[1] + "</li> <li>" + temples[i].services[2] + "</li>";

            document.getElementById("ordinances").innerHTML = "<li>" + temples[i].ordinanceSchedule[0];

            for (x = 0; x < temples[i].closures.length; x++) {
                let node = document.createElement("LI");
                let textnode = document.createTextNode(temples[i].closures[x]);
                node.appendChild(textnode);
                document.getElementById("closures").appendChild(node);
            }
        }
    }
}