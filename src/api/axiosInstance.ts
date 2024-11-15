import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
    baseURL: url,
    timeout: 10000,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return error.response;
    }
);

const setToken: (newToken: string) => void = (newToken: string) => {
    console.log('newtoken ',newToken)
    newToken.trim() !== 'null'
        ?
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + newToken
        :
        axiosInstance.defaults.headers.common['Authorization'] = ''
}

export {setToken, axiosInstance};