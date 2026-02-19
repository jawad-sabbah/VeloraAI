import API from "./axios";

export const registerUser = async (userData) => {
 try {
  const response = await API.post('/users/register', userData);
  return response.data;
 } catch (error) {
  const message = error.response && error.response.data.message
  throw new Error(message || 'Registration failed');
 }
}

export const loginUser=async (userData) => {
  try {
    const response = await API.post('/users/login', userData);
    return response.data;
  } catch (error) {
    const message = error.response && error.response.data.message
    throw new Error(message || 'Login failed');
  }
}