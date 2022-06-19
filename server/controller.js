module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A friend asks only for your time not your money.", "A lifetime of happiness lies ahead of you.", "All will go well with your new project.", "Better ask twice than lose yourself once.", "Fortune Not Found: Abort, Retry, Ignore?"];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getGif: (req, res) => {
        const gifs = ["1", "2", "3"];
      
        let randomIndex = Math.floor(Math.random() * gifs.length);
        let randomGif = gifs[randomIndex];
      
        res.status(200).send(randomGif);
    },

    getFour: (req, res) => {
        const fours = ["4"];
      
        let randomIndex = Math.floor(Math.random() * fours.length);
        let randomFour = fours[randomIndex];
      
        res.status(200).send(randomFour);
    },

    getFive: (req, res) => {
        const fives = ["5"];
      
        let randomIndex = Math.floor(Math.random() * fives.length);
        let randomFive = fives[randomIndex];
      
        res.status(200).send(randomFive);
    },

}