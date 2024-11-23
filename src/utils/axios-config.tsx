import axios from 'axios';
import { baseUrl } from './base-url';
// import { authService } from '../api/auth/auth-service';


// Create the axios instance
const apiClient = axios.create({
  baseURL: baseUrl,
});

// Request interceptor to attach token
apiClient.interceptors.request.use( async (config) => {
  
    const data = localStorage.getItem('user');
    const token = data? JSON.parse(data).token : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers.Accept = "application/json";
    return config;

  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle refresh token logic
// apiClient.interceptors.response.use(
//   (response) => response, // Simply return response if successful
//   async (error) => {
//     const { response, config } = error;

//     if (response && response.status === 403 && config && !config._retry) {
//       config._retry = true;

//       try {
//         const newAccessToken = await authService.RefreshToken();

//         if (config.headers) {
//           config.headers.Authorization = `Bearer ${newAccessToken}`;
//         }

//         return apiClient(config); // Retry the request with updated token
//       } catch (tokenRefreshError) {
//         console.error('[Error Refreshing Token]', tokenRefreshError);
//         // Optional: handle logout or further actions here
//       }
//     }

//     // If no specific handling, reject the error
//     return Promise.reject(error);
//   }
// );

export default apiClient;
