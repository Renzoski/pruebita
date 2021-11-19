
document.getElementById('formPoke').addEventListener('submit', handleClick);

function handleClick(e) {

    let { value: poke } = document.getElementById("pokemon");
    let element = document.getElementById("poder");

    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`, {
    }).then(res => res.json())
        .then(response => {

            element.innerHTML = response?.abilities[0]?.ability?.name;
        })
        .catch(error => console.error('Error - no se pudo obtener el pokemon', error));

    e.preventDefault();
}


