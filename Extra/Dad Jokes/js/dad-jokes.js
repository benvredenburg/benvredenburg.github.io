async function getDadJoke() {
    const url = 'https://icanhazdadjoke.com';
    let h = new Headers({
        'Accept': 'application/json',
        'User-Agent': 'WDD-230 Test User Agent https://benvredenburg.github.io'
    });

    const response = await fetch(url, {headers: h});
    if(response.status == 200) {
        return response.json();
    }
    else {
        throw new Error('No dad Jokes found: ' +response.status)
    }
}

function newJoke() {
    const dad_id = document.getElementById('dad-joke');
    dad_id.innerHTML = '';
    const joke = getDadJoke()
    .then(function(j) {
        dad_id.innerHTML = j['joke'];
    }
    
    )}