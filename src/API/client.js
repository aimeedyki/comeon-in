import axios from 'axios';

const handleError = error => {
  let errorMessage;

  if (error.response.data.response.errorDescription) {
    errorMessage = error.response.data.response.errorDescription;
  } else {
    errorMessage = 'An unexpected server error has occured';
  }

  return Promise.reject(errorMessage);
};

const handleSuccess = response => {
  return Promise.resolve(response);
};

const instance = axios.create({
  baseURL: 'http://localhost:3003',
  headers: { 'content-type': 'application/json' }
});

instance.interceptors.response.use(
  handleSuccess,
  handleError
);

export default instance;
