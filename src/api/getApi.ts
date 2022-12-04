import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://cart-server-app.herokuapp.com', //https://cart-server-app.herokuapp.com
});

// http://localhost:8800

async function getProductList() {
  const res = await httpClient.get('/product');
  return res.data;
}

async function getProduct(id: number) {
  const res = await httpClient.get(`/product/${id}`);
  return res.data;
}

async function putProduct(data: any = null) {
  const res = await httpClient.patch(`/product/${data.id}`, data);
  return res.data;
}

async function addProduct(data: any) {
  const res = await httpClient.post('/product', data);
  return res.data;
}

async function deleteProduct(id: number) {
  const res = await httpClient.delete(`/product/${id}`);
  return res.data;
}

async function search(searchUrl: string) {
  const res = await httpClient.get(`/product?q=${searchUrl}`);
  return res.data;
}

async function pagination(
  order = 'createdAt',
  ascending = 'asc',
  currentPage: number,
  limit: number
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
