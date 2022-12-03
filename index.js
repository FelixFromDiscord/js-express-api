require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.post('/', (req, res) => {
    res.send(```
    {
        "response": {
          "text": "Здравствуйте! Это мы, хороводоведы.",
          "tts": "Здравствуйте! Это мы, хоров+одо в+еды.",
          "buttons": [
              {
                  "title": "Надпись на кнопке",
                  "payload": {},
                  "url": "https://example.com/",
                  "hide": false
              }
          ],
          "end_session": false
        },
        "version": "1.0"
      }
      ```);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});