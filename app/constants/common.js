import axios from 'axios';

const Common = {};

Common.request = {
  post(url, data = {}) {
    return axios
      .post(url, data);
  },
  get(url, data = {}) {
    return axios
      .get(url, {params: data});
  },
  delete(url, data = {}) {
    return axios
      .delete(url, {params: data});
  },
  put(url, data = {}) {
    return axios
      .put(url, data);
  }
};

export default Common;
