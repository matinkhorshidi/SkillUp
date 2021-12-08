import { setItem } from '../../storage/storage';
import Http from '../../interceptor/interceptor';
import { LoginUser } from '../login-student.api';

// main url of backend
const MainUrl = process.env.REACT_APP_API_URL;

const setNews = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}api/news/`, obj);
    console.log('setNews');
    console.log(result.data.result);

    // const token = result.data.result.jwtToken;
    // const user = result.data.result.studentModel;
    // setItem('token', token);
    // setItem('user', JSON.stringify(user));
    return result.data.result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { setNews };
