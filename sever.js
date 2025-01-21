
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/characters/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const character = response.data.results[0];
        if (!character) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }
        res.json(character);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener datos del personaje' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});