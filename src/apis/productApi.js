import axios from "axios";
import axiosClient from "./axiosClient";

const productApi = {
  async getAll() {
    const response = await axiosClient.get("/productList/");
    return response.data || [];
  },
  async getProduct(id) {
    const response = await axiosClient.get(`/productList/${id}`);
    return response.data || {};
  },
  async add(data) {
    const url = `/productList`;
    const response = await axiosClient.post(url, JSON.stringify(data));
    return response;
  },
  async put(id, data) {
    const url = `/productList/${id}`;
    const response = await axiosClient.put(url, JSON.stringify(data));
    return response;
  },
  async delete(id) {
    const url = `/productList/${id}`;
    const response = await axiosClient.delete(url);
    return response;
  },
};

export default productApi;
