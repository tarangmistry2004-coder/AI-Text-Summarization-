// import axios from "axios";

const axios = require("axios");
const express = require("express");
const cors = require("cors");
// const { stream } = require("undici-types");
const console = require("node:console");

const app = express()
app.use(cors())
app.use(express.json())

app.post('/summarize', async (req, res) => {
    const { text } = req.body;

    try {
        const response = await axios.post(
            "http://localhost:11434/api/generate",
            {
                model: 'llama3:latest',
                // messages: [
                //     {
                //         role: "system",
                //         content: `
                //         You are an expert summarizer.
                //         `
                //     },
                //     {
                //         role: "user",
                //         content: `Summarize this text:\n\n${text}`
                //     }
                // ],
                prompt: `summerize this text : \n\n${text}`,
                stream: false
            }
        );
        res.json({ summary: response.data.response })
    }
    catch (error) {
        console.log(res.status(500).json({ error: 'ollama error' }));
    }

});

app.listen(5000, () => {
    console.log('server running on localhost:5000');
});