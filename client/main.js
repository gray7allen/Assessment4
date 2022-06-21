const postersContainer = document.querySelector('#posters-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/posters`

const postersCallback = ({ data: posters }) => displayPosters(posters)
const errCallback = err => console.log(err.response.data)

const getAllPosters = () => axios.get(baseURL).then(postersCallback).catch(errCallback)
const createPoster = body => axios.post(baseURL, body).then(postersCallback).catch(errCallback)
const deletePoster = id => axios.delete(`${baseURL}/${id}`).then(postersCallback).catch(errCallback)
const updatePoster = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(postersCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createPoster(bodyObj)

    title.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createPosterCard(poster) {
    const posterCard = document.createElement('div')
    posterCard.classList.add('poster-card')

    posterCard.innerHTML = `<img alt='poster cover' src=${poster.imageURL} class="poster-cover"/>
    <p class="poster-title">${poster.title}</p>
    <div class="btns-container">
        <button onclick="updatePoster(${poster.id}, 'minus')">-</button>
        <p class="poster-rating">${poster.rating} smiles</p>
        <button onclick="updatePoster(${poster.id}, 'plus')">+</button>
    </div>
    <button onclick="deletePoster(${poster.id})">delete</button>
    `


    postersContainer.appendChild(posterCard)
}

function displayPosters(arr) {
    postersContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPosterCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPosters()

const fortuneButton = document.getElementById("randomFortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneButton.addEventListener('click', getFortune)