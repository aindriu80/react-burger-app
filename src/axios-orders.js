import axios from 'axios';

const instance = axios.create({ 
    baseURL: 'https://react-my-burger-3ec32.firebaseio.com/'
});

export default instance;