let guitars = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxwjnamnJNP4tmaTMYubMgSBxdqhwu5p6ihZ7tGGwPcVaYZkwMg",
    "https://www.bhphotovideo.com/images/images2500x2500/ibanez_grgm21mvpk_gio_series_gr21m_electric_1217813.jpg",
    "http://images-cdn.azureedge.net/azure/in-resources/4df7b074-f8d8-4a3c-b19e-959c62ecffc9/Images/ProductImages/Source/GC%2039C%20Black%20Acoustic%20Guitar.jpg;width=600",
    "https://cdn.shopify.com/s/files/1/0692/6703/products/IMG_9446.JPG?v=1486747111",
    "https://www.summerhaysmusic.com/wp-content/uploads/2016/06/Mikro-electric-guitar.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1PUmLXUHSOwrsWi--Vy69Nwg2QSyUxv9TuWKHC-rGBaCh3k-0Q",
    "https://images-na.ssl-images-amazon.com/images/I/41UvBXvBC3L._SY450_.jpg",
    ]
let chordList = [];
let newSongName = ''
let id = 1;

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
        // console.log('Did it Work??', chordList)
        res.json(chordList)
    },

    deleteSong: (req, res) => {
        chordList.splice(0,(chordList.length))
        id = 1
        console.log(chordList)
        res.json(chordList)
    },
    updateSongName: (req,res) => {
        let songName = req.body.tempVar
        res.json(songName)

    },
    guitarGetter: (req,res) => {
        let i= Math.floor(Math.random() * guitars.length)
        res.json(guitars[i])
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