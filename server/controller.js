const motivationalPosters = require('./db.json')

let globalID = 4



module.exports = {

    getFortune: (req, res) => {
        const fortunes = ["A friend asks only for your time not your money.", "A lifetime of happiness lies ahead of you.", "All will go well with your new project.", "Better ask twice than lose yourself once.", "Fortune Not Found: Abort, Retry, Ignore?"];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAllPosters: (req, res) => {
        res.status(200).send(motivationalPosters)
    },

    deletePoster: (req, res) => {
        let index = motivationalPosters.findIndex(elem => elem.id === +req.params.id)
        motivationalPosters.splice(index, 1)
        res.status(200).send(motivationalPosters)
    },

    createMotivationalPoster: (req, res) => {
        let {title, imageURL} = req.body
        let newPoster = {
            title,
            imageURL,
            id: globalID
        }
        motivationalPosters.push(newPoster)
        globalID++
        res.status(200).send(motivationalPosters)
    },

}