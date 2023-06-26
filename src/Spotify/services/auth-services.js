import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;

//const USERS_URL = `${SERVER_API_URL}/users`;

//const USERS_URL = "https://5ada-73-51-187-175.ngrok-free.app/api/users";

const USERS_URL = "http://localhost:4000/api/users";

const api = axios.create({ withCredentials: true });

export const login = async ({ emailId, password }) => {
  console.log("link : ", `${USERS_URL}/login`);

  const response = await api.post(`${USERS_URL}/login`, { emailId, password });

  const user = response.data;

  console.log(user);

  return user;
};

export const logout = async () => {
  const response = await api.post(`${USERS_URL}/logout`);

  return response.data;
};

export const usertype = async () => {
  const response = await api.get(`${USERS_URL}/usertype`);

  return response.data;
};

export const updateUser = async (user) => {
  const response = await api.put(`${USERS_URL}/current`);

  return response.data;
};

export const register = async ({
  firstName,
  lastName,
  username,
  usertype,
  emailId,
  password,
}) => {
  const response = await api.post(`${USERS_URL}/register`, {
    firstName,
    lastName,
    username,
    usertype,
    emailId,
    password,
  });

  console.log("details");
  console.log(firstName);
  console.log(lastName);
  console.log(username);
  console.log(emailId);
  console.log(password);
  const user = response.data;
  return user;
};
