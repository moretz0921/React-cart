import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:8800', //https://cart-server-app.herokuapp.com
});

async function getProductList() {
  const res = await httpClient.get('/product');
  return res.data;
}

async function getProduct(id) {
  const res = await httpClient.get(`/product/${id}`);
  return res.data;
}

async function putProduct(data = null) {
  const res = await httpClient.patch(`/product/${data.id}`, data);
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

async function search(searchUrl) {
  const res = await httpClient.get(`/product?q=${searchUrl}`);
  return res.data;
}

async function pagination(
  order = 'createdAt',
  ascending = 'asc',
  currentPage,
  limit
) {
  const res = await httpClient.get(
    `/product/?_sort=${order}&_order=${ascending}&_page=${currentPage}&_limit=${limit}`
  );
  return res.data;
}

export {
  getProductList,
  getProduct,
  putProduct,
  addProduct,
  deleteProduct,
  search,
  pagination,
};
