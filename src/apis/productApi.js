import axiosClient from "./axiosClient";

const productApi = {
  async getAll() {
    const response = await axiosClient.get("/productitem/");
    return response.data || [];
  },
  async get(id) {
    const response = await axiosClient.get(`/productitem/${id}`);
    return response.data || {};
  },
  async add(data) {
    const url = `/productitem`;
    const response = await axiosClient.post(url, data);
    return response;
  },
  async delete(id) {
    const url = `/productitem/${id}`;
    const response = await axiosClient.delete(url);
    return response;
  },
};

export default productApi;
