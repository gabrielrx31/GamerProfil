const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//Object med spillere og deres yndlingsspil
const gamers = {
    'emil': 'Minecraft',
    'anna': 'Fortnite',
    'lara': 'The Sims',
    'john': 'Call of Duty',
    'mike': 'Apex Legends',
    'sara': 'Overwatch',
    'tom': 'League of Legends',
    'nina': 'Valorant',
    'leo': 'FIFA'
};

app.get('/', (req, res) => {
    res.type('text').send('Velkommen til Gamer-API. Gå til /gamer/:name for at se en gamers yndlingsspil.');
});

app.get('/gamer/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    if (gamers[name]) {
        res.type('text').send(`${name} spiller ${gamers[name]}`);
    } else {
        res.status(404).type('text').send(`Spilleren "${name}" findes ikke.`);
    }
});

app.listen(PORT, () => console.log(`Serveren kører på http://localhost:${PORT}`));

