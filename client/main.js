const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);

const fortuneButton = document.getElementById("randomFortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneButton.addEventListener('click', getFortune)

const gifButton = document.getElementById("randomGifButton")

const getGif = () => {
    axios.get("http://localhost:4000/api/gif")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

gifButton.addEventListener('click', getGif)

const fourButton = document.getElementById("randomFourButton")

const getFour = () => {
    axios.get("http://localhost:4000/api/four")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fourButton.addEventListener('click', getFour)

const fiveButton = document.getElementById("randomFiveButton")

const getFive = () => {
    axios.get("http://localhost:4000/api/five")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fiveButton.addEventListener('click', getFive)