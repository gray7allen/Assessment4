const container = document.querySelector('#posters-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/poster`

const posterCallback = ({ data: motivationalPosters }) => displayPosters(motivationalPosters)
const errCallback = err => console.log(err)

const fortuneButton = document.getElementById("randomFortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneButton.addEventListener('click', getFortune)

const getAllPosters = () => axios.get(baseURL).then(posterCallback).catch(errCallback)
const createMotivationalPoster = body => axios.post(baseURL, body).then(posterCallback).catch(errCallback)
const deletePoster = id => axios.delete(`${baseURL}/${id}`).then(posterCallback).catch(errCallback)

function submitHandler(m) {
    m.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value
    }

    createMotivationalPoster(bodyObj)

    title.value = ''
    imageURL.value = ''

}

function createPoster(poster) {
    const motPoster = document.createElement('div')
    motPoster.classList.add('mot-poster')

    motPoster.innerHTML = `<img alt='motivational poster' src=${poster.imageURL} class="motivational-poster"/>
    <p class="title">${poster.title}</p>
    <button onclick="deletePoster(${poster.id})">delete</button>
    `
    container.appendChild(motPoster)
}

function displayPosters(arr) {
    container.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPoster(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPosters()