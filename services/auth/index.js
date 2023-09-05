import axios from "axios";

export const register_me = async (formData) => {
  try {
    console.log("this is env:", process.env.NEXT_PUBLIC_API_BASE_URL);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in register (service) => ", error);
  }
  // try {
  //   const response = await axios.post(
  //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`,
  //     formData
  //   );
  //   return response.data;
  // } catch (error) {
  //   if (error.response && error.response.status === 404) {
  //     console.error("Resource not found:", error);
  //     // Handle the 404 error here
  //   } else {
  //     console.error("Error in register (service):", error);
  //     throw error;
  //   }
  // }
};

export const login_me = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in login (service) => ", error);
  }
};

export const forget_password = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/forgetPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in forget Password (service) => ", error);
  }
};
