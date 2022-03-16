import axios from 'axios'

const KEY = "AIzaSyDuhNaNO8rxp9UP5Bh0p8YKX0296lUuSW0"

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    headers: {},
    params: {
        part: "snippet",
        maxResults: 10,
        type: 'video',
        key: KEY,
    },
});

export default youtube


// https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY]
// API KEY -> AIzaSyDuhNaNO8rxp9UP5Bh0p8YKX0296lUuSW0