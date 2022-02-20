

const fetch = import('node-fetch');
const fs = require('fs');

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((res) => res.json())
// .then((data)) => console.log(data))
// .catch((err)) => console.error(err));

fs.readFile('./text.txt',{encoding: 'utf-8'}, (err, data) =>
    console.log(data)
)