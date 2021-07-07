import axios from 'axios';


export const axiosAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {// why do we need out headers: we need to pass our tokens to our headers object//
            Authorization: token,
        },
    });
};