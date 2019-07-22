import axios from 'axios'


const KEY = 'AIzaSyC9MuADRz0yBtC1bS00KUtvfklTXmhbjkw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})