const posters = require('./db.json')

let globalID = 4

module.exports = {
    getPosters: (req, res) => {
        res.status(200).send(posters)
    },
    deletePoster: (req, res) => {
        let index = posters.findIndex(elem => elem.id === +req.params.id)
        posters.splice(index, 1)
        res.status(200).send(posters)
    },
    createPoster: (req, res) => {
        const {title, rating, imageURL} = req.body;
        let newPoster = {
            title: title,
            rating,
            imageURL,
            id: globalID
        }
        posters.push(newPoster)
        globalID++
        res.status(200).send(posters)
    },
    updatePoster: (req, res) => {
        const {type} = req.body;
        let index = posters.findIndex(elem => elem.id === +req.params.id)

        if(type === 'minus' && posters[index].rating > 1){
            posters[index].rating -= 1;
            res.status(200).send(posters)
        } else if(type === 'plus' && posters[index].rating < 5){
            posters[index].rating += 1;
            res.status(200).send(posters)
        } else {
            res.status(400).send('Invalid star rating!')
        }
    },
        getFortune: (req, res) => {
        const fortunes = ["A friend asks only for your time not your money.", "A lifetime of happiness lies ahead of you.", "All will go well with your new project.", "Better ask twice than lose yourself once.", "Fortune Not Found: Abort, Retry, Ignore?"];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
}