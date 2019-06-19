const express = require(`express`);

const app = express();

app.get('/', (req, res) => {
    res.send(`Hey! There.`);
});

app.get('/about', (req, res) => {
    res.send(`My name is Karan Patel.`);
});

app.listen(4000, () => console.log('Listening on 4000'));