import axios from 'axios';

 let base = 'http://www.jixing.com:8081/';
// let base = 'http://106.52.26.157/';
//案例
export const getWorkListPage = params => { return axios.get(`${base}/work/all`, { params: params }); };
// 服务
export const getServiceListPage = params => { return axios.get(`${base}/service/all`, { params: params }); };
// 产品
export const getProductListPage = params => { return axios.get(`${base}/product/all`, { params: params }); };
// banner图
export const getBannerListPage = params => { return axios.get(`${base}/banner/all`, { params: params }); };

// 配置
export const getConfigListPage = params => { return axios.get(`${base}/config/all`, { params: params }); };
export const updateConfig = params => { return axios.post(`${base}/config/update`, params); };
export const addConfig = params => { return axios.post(`${base}/config/add`, params); };
export const deleteConfig = params => { return axios.get(`${base}/config/delete`, { params: params }); };
export const findConfig = params => { return axios.get(`${base}/config/find`, { params: params }); };

export const addLeaveWord = params => { return axios.post(`${base}/leaveWord/add`, params); };
