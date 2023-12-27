
const USER_KEY = 'yourAppUser';

export const addUserToLocalStorage = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(USER_KEY);
};

export const getUserFromLocalStorage = () => {
  try {
    const result = localStorage.getItem(USER_KEY);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    console.error('Error retrieving user from local storage:', error);
    return null;
  }
};
