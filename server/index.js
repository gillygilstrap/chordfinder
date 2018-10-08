const express = require('express');
const bodyParser = require('body-parser');
const songController = require('./controller/song_controller');

const app = express();
app.use(bodyParser.json());

app.get('/data/song', songController.getCurrentName)
app.get('/data/chords', songController.getCurrentSong)
app.get('/data', songController.guitarGetter)
app.post('/data', songController.addChord);
app.put('/data', songController.updateSongName);
app.delete('/data', songController.deleteSong)

const PORT = 4006;
app.listen(PORT, () => console.log('Server is listening on port 4006'));


// --------------------------------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const booksController = require('./controllers/books_controller');


// const app = express();
// app.use(bodyParser.json());

// app.get('/api/books', booksController.getBooks);
// app.post('/api/books', booksController.createBook);
// app.delete('/api/books/:id', booksController.deleteBook);
// app.put('/api/books/:id', booksController.updateBook);


// const port = 4000
// app.listen(port, () => {
//     console.log(`I'm listening on port ${port}`);
// });