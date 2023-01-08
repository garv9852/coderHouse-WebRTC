import axios from 'axios';
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
})
export const sendOtp = (data) => api.post('/api/send-otp', data)
export const verifyOtp = (data) => api.post('/api/verify-otp', data)
export const activate = (data) => api.post('/api/activate', data);
export const refresh = () => api.get('/api/refresh');
export const creatRoom = (data) => api.post('/api/rooms', data);
export const getAllRooms = () => api.get("/api/rooms")
export const logout = () => api.post('/api/logout');
api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && originalRequest && !originalRequest.isRetry) {
            originalRequest.isRetry = true;
            try {
                await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`,
                    {
                        withCredentials: true
                    }
                )
                return api.request(originalRequest);
            }
            catch (err) {
                console.log(err.message);
            }
        }
        throw error;
    }
);


export default api;