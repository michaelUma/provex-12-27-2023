// API.js

import axios from 'axios';

const baseURL = 'https://exceedingp.pythonanywhere.com/api/v1';

export const getUsdtTrc20Data = () => {
  return axios.get(`${baseURL}/usdt-trc20/`);
};

export const getUsdtErc20Data = () => {
  return axios.get(`${baseURL}/usdt-erc20/`);
};

export const getBtcData = () => {
  return axios.get(`${baseURL}/btc/`);
};
