import { setItem } from '../storage/storage';
import Http from '../interceptor/interceptor';

// main url of backend
// const MainUrl = process.env.PUBLIC_API;
const MainUrl = 'https://academy-4-man-army.herokuapp.com/';

const LoginUser = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}api/auth/login`, obj);

    const token = result.data.result.jwtToken;
    const user = result.data.result.studentModel;

    setItem('token', token);
    setItem('user', JSON.stringify(user));

    return result.data.result;
  } catch (error) {
    return false;
  }
};

export { LoginUser };
