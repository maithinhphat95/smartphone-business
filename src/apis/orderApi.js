import axiosClient from "./axiosClient";

const orderApi = {
  async getAll() {
    const response = await axiosClient.get("/orderList/");
    return response.data || [];
  },
  async getOrder(id) {
    const response = await axiosClient.get(`/orderList/${id}`);
    return response.data || {};
  },
  async add(data) {
    const url = `/orderList`;
    const response = await axiosClient.post(url, data);
    return response;
  },
  async put(id, data) {
    const url = `/orderList/${id}`;
    const response = await axiosClient.put(url, JSON.stringify(data));
    return response;
  },
  async delete(id) {
    const url = `/orderList/${id}`;
    const response = await axiosClient.delete(url);
    return response;
  },
};

export default orderApi;
