import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/matches', (req, res) => {
    const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
    res.json(items);
});

app.post('/api/matches', (req, res) => {
    const newItem = req.body;
    newItem.id = Math.random().toString(36).substr(2, 9);
    res.status(201).json(newItem);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});