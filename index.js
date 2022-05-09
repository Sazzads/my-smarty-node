const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from smarty pant! haha')
})

const users = [
    { id: 1, name: 'sazzad hossain', email: 'sazzadtk@gmail.com', phone: '01733439812' },
    { id: 2, name: 'sabha khan', email: 'rifat@gmail.com', phone: '01715477668' },
    { id: 3, name: 'sabrina saba', email: 'sabrina@gmail.com', phone: '01843986536' },
    { id: 4, name: 'farzana boby', email: 'bobys@gmail.com', phone: '017165428795' },
    { id: 5, name: 'sumayia moon', email: 'moon@gmail.com', phone: '01634965735' },
    { id: 6, name: 'bishal chawdhory', email: 'bishal@gmail.com', phone: '01346985674' },
    { id: 7, name: 'mainul kahn', email: 'mainul@gmail.com', phone: '01717371067' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);

    }
    else {
        res.send(users);

    }
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user);
    res.send('finding user')
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);

    res.send('post method success')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})