import axios from 'axios';

const BASE_URL = 'https://wysa-backend.herokuapp.com/api';

export const API_REQUEST_URL = axios.create({
	baseURL: BASE_URL,
});
