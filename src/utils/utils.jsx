export const getCredentials = (email, password) => {
  return { email: email.value, password: password.value };
};

export const getTestData = () => {
  return { email: "rammohan@gmail.com", password: "rammohan123" };
};
