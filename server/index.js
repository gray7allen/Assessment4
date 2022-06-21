const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getPosters, deletePoster, createPoster, updatePoster, getFortune} = require('./controller')


app.get('/api/posters', getPosters)
app.delete('/api/posters/:id', deletePoster)
app.post('/api/posters', createPoster)
app.put('/api/posters/:id', updatePoster)

app.get('/api/fortune', getFortune)


app.listen(4000, console.log('Listening on port 4000'))