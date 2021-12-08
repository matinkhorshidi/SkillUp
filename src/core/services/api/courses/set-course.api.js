import { setItem } from '../../storage/storage';
import Http from '../../interceptor/interceptor';
import { LoginUser } from '../login-student.api';

// main url of backend
const MainUrl = process.env.REACT_APP_API_URL;

const setCourse = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}api/course/add`, obj);

    console.log('setCourse');
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

export { setCourse };
