import axios from 'axios';

 let base = 'http://www.jixing.com/';
// let base = 'http://106.52.26.157/';
//案例
export const getWorkListPage = params => { return axios.get(`${base}/work/all`, { params: params }); };
// 服务
export const getServiceListPage = params => { return axios.get(`${base}/service/all`, { params: params }); };
// 产品
export const getProductListPage = params => { return axios.get(`${base}/product/all`, { params: params }); };
// banner图
export const getBannerListPage = params => { return axios.get(`${base}/banner/all`, { params: params }); };
export const getConfigListPage = params => { return axios.get(`${base}/config/all`, { params: params }); };
