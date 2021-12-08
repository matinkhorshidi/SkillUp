import { setItem } from '../../storage/storage';
import Http from '../../interceptor/interceptor';
import { LoginUser } from '../login-student.api';

// main url of backend
const MainUrl = process.env.REACT_APP_API_URL;

const getNews = async () => {
  try {
    const result = await Http.get(`${MainUrl}api/news`);
    console.log('getNews');
    console.log(result);

    // const token = result.data.result.jwtToken;
    // const user = result.data.result.studentModel;

    // setItem('token', token);
    // setItem('user', JSON.stringify(user));
    return result.data.result;
  } catch (error) {
    return false;
  }
};

export { getNews };
