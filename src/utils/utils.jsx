
export const getCredentials = (email, password) => {
  if (email.value && password.value) {
    return { email: email.value, password: password.value };
  } else {
    return { email: "adarshbalika@gmail.com", password: "adarshBalika123" };
  }
};