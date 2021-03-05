const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const users = [
    { name: 'Tony', email: 'tony@gmail.com' },
    { name: 'Billy', email: 'billy@gmail.com' },
];

app.get('/', (req, res) => {
    res.send('Wellcome to my simple user api');
});

app.get('/users', (req, res) => {
    res.json({
        ok: true,
        users,
    });
});

app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
});
