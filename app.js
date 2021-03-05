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

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
    }
    res.json({
        msg: 'User created',
    });
});

app.get('/users/:userName', (req, res) => {
    const { userName } = req.params;

    const user = users.find((user) => user.name === userName);

    if (!user) return res.json({ msg: 'User not found' });

    res.json(user);
});

app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
});
