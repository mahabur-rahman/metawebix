import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1/user";

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 500) {
      const response = await axios.post(
        "/refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 201) {
        // every headers set token
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        return axios(error.config);
      }
    }

    return error;
  }
);
