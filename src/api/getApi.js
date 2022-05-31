import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:8800',
});

async function getProductList() {
  const res = await httpClient.get('/product');
  return res.data;
}

async function getProduct(id) {
  const res = await httpClient.get(`/product/${id}`);
  return res.data;
}

async function addProduct(data) {
  const res = await httpClient.post('/product', data);
  return res.data;
}

async function deleteProduct(id) {
  const res = await httpClient.delete(`/product/${id}`);
  return res.data;
}

async function pagination(currentPage, limit) {
  const res = await httpClient.get(
    `/product/?_page=${currentPage}&_limit=${limit}`
  );
  return res.data;
}

export { getProductList, getProduct, addProduct, deleteProduct, pagination };
