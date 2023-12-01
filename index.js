const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const { createPaletteFromColor } = require('palettey');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate-palette', (req, res) => {
    const { color } = req.body;
    if (!color) {
        return res.status(400).send('No color provided');
    }

    const palettey = require('palettey');
    let palette = createPaletteFromColor('primary', color, {});

    res.json(palette);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


