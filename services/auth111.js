import axios from "axios";

const serverUrl = "http://localhost:5000";

export const signUp = (data) => {
  console.log("data", data);
  axios.post(serverUrl + "/api/create-user", data).then((result) => {
    console.log(result);
  });
};

export const registerUser111 = async (email, password) => {
  try {
    const response = await axios.post(serverUrl + "/api/create-user", {
      email,
      password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Registration failed");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
