import axios from 'axios';

export const DOGS_50 = () => {
    axios.get('https://dog.ceo/api/breeds/image/random/50')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

export const DOGS_50_2 = () => {
    axios.get('https://dog.ceo/api/breeds/image/random/50')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

export const SEARCH = (query) => {
    axios.get(`https://dog.ceo/api/breed/${query}/images/random`)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}