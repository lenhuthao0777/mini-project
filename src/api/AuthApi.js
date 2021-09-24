import { AxiosClient } from "./AxiosClient";

const AuthApi = {
  login: (values) => {
      return AxiosClient.post("/auth/login", values);
  },
  // register: (values) => {
  //     return AxiosClient.post("API...", values);
  // }
};

export default AuthApi;