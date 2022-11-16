import axiosClient from "./axiosClient";

const orderApi = {
  async getAll() {
    const response = await axiosClient.get("/orderList/");
    return response.data || [];
  },
  async get(id) {
    const response = await axiosClient.get(`/orderList/${id}`);
    return response.data || {};
  },
  async add(data) {
    const url = `/orderList`;
    const response = await axiosClient.post(url, data);
    return response;
  },
};

export default orderApi;
