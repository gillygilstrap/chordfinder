const chordList = [];
let id = 0;
// const chordList = [{value: 'a minor', id = 0}]
module.exports = {
    addChord: (req , res) => {

         const value = req.body.value
         const newChord = {
            value: value,
            id: id
        };
        id = id + 1;
        chordList.push(newChord);
        console.log('Did it Work??', chordList)
        res.json(chordList)
    }
}
//------------------------------------------------

// const books = [];
// let id = 0;

// module.exports = {
//     getBooks: (req, res) => {
//         res.json(books);
//     },
//     createBook: (req,res) => {
//         const {title,author} = req.body
//         const newBook = {
//             title,
//             author,
//             id
//         };
//         id = id +1;
//         books.push(newBook)
//         res.json(books)
//     } ,
//     updateBook: (req,res) => {
//         const bookId = req.params.id;
//         const indexOfBook = books.findIndex(book => book.id == bookId);
//         if (indexOfBook === -1) {
//             res.status(404).send(`Error! Abook with id ${bookId} does not exist!`)
//         } else {
//             books[indexOfBook].name = req.body.name; 
//             res.json(books);
            
//         } 
//     },
//     deleteBook: (req,res) => {
//         const bookId = req.params.id;
//         const indexOfBook = books.findIndex(book => book.id == bookId);
//         if (indexOfBook === -1) {
//             res.status(404).send(`Error! Abook with id ${bookId} does not exist!`)
//         } else {
//             console.log(indexOfBook);
//             books.splice(indexOfBook, 1);
//             res.json(books);
            
//         }
        
//     }

// }