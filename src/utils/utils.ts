export const getCredentials = (email: any, password: any) => {
  return { email: email.value, password: password.value };
};

export const getTestData = () => {
  return { email: "rammohan@gmail.com", password: "rammohan123" };
};
