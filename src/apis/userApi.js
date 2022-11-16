import axiosClient from "./axiosClient";

const userApi = {
  async getAll() {
    const response = await axiosClient.get("/userList/");
    return response;
  },
  async get(id) {
    const response = await axiosClient.get(`/userList/${id}`);
    return response;
  },
  async add(data) {
    const url = `/userList`;
    const response = await axiosClient.post(url, data);
    return response;
  },
  async delete(id) {
    const url = `/userList/${id}`;
    const response = await axiosClient.delete(url);
    return response;
  },
  async getCart(id) {
    const response = await axiosClient.get(`/userList/${id}`);
    return response;
  },
};

export default userApi;
