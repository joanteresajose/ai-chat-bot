const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/gemini', async (req, res) => {
    try {
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateText',
            req.body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer AIzaSyBVKNnNipLSGpjV8GwLdfkyNF02IRQ96SQ`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
