import axios from 'axios'

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    headers: {},
    params: {
        key: "AIzaSyDuhNaNO8rxp9UP5Bh0p8YKX0296lUuSW0",
    },
});

export default youtube


// https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY]
// API KEY -> AIzaSyDuhNaNO8rxp9UP5Bh0p8YKX0296lUuSW0