import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1/',
headers: {
    'user-key': 'd28601674058fa8f84dd4b7a8c2c06b8'
}
});