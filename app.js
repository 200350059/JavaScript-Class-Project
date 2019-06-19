const express = require(`express`);

const app = express();

app.get('/', (req, res) => {
    res.send(`Hey! There.`);
});

app.get('/about', (req, res) => {
    res.send(`My name is Karan Patel.`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));