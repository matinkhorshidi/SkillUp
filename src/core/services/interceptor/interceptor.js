import axios from 'axios';
import { getItem } from '../storage/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.interceptors.response.use(
  (response) => {
    console.log('با موفقیت انجام شد');
    // toast.success('با موفقیت انجام شد', {
    //   position: 'top-right',
    // });
    return response;
  },
  async (error) => {
    // check if error is expected from backend
    try {
      const expectedError =
        error.response &&
        error.response.state >= 400 &&
        error.response.status < 500;

      // if error doesnt expected when we log it
      if (!expectedError) {
        // tweak it later
        // get error message from backend (see object of response later... maybe its changed)
        try {
          console.log(error.response.data.message[0].message);
          toast.error(error.response.data.message[0].message, {
            position: 'top-right',
          });
        } catch (error) {}
      }
    } catch (error) {}
    return Promise.reject(error);
  }
);

// will send token to headers request ( in x-auth-token body )
axios.interceptors.request.use((config) => {
  config.headers['x-auth-token'] = getItem('token');
  return config;
});

export default axios;
