import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from './store/userReducer';
import { getProductList, pagination } from './api/getApi';
import { IgetProductResponse, Order, Ascending } from './types'

import Header from './components/Header';
import Footer from './components/Footer';

import Join from './pages/Join';
import Login from './pages/Login';
import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import MyPage from './pages/MyPage';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);

  const initialCartItem = localStorage.getItem('cartState')
    ? JSON.parse(localStorage.getItem('cartState') || '{}')
    : [];
  const [productItems, setProductItems] = useState<IgetProductResponse | []>([]);
  const [cartItems, setCartItems] = useState(initialCartItem);

  const [tatalProduct, setTotalProduct] = useState<IgetProductResponse | []>([]);
  const [order, setOrder] = useState<Order>('createdAt');
  const [ascending, setAscending] = useState<Ascending>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);

  const totalCount = 34;
  const pageCount = 4;

  const totalPage = Math.ceil(totalCount / limit);
  const pageGroup = Math.ceil(currentPage / pageCount);
  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  const firstNumber = lastNumber - (pageCount - 1);

  const next = lastNumber + 1;
  const prev = firstNumber - 1;

  const fetchProductData = async (
    orderQuery: any,
    ascQuery: any,
    currentQuery: any,
  ) => {
    const result: any = await pagination(
      orderQuery,
      ascQuery,
      currentQuery,
      limit,
    );
    setProductItems(result);
  };

  const fetchTotalData = async () => {
    const result = await getProductList();
    setTotalProduct(result);
  };

  useEffect(() => {
    fetchTotalData();
  }, []);

  useEffect(() => {
    fetchProductData(order, ascending, currentPage);
  }, [order, ascending, currentPage]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
              <Main productItems={productItems} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/join"
          element={currentUser ? <Navigate to="/" /> : <Join />}
        />
        <Route
          path="/product"
          element={
            <Product
              tatalProduct={tatalProduct}
              productItems={productItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPage={totalPage}
              firstNumber={firstNumber}
              lastNumber={lastNumber}
              prev={prev}
              next={next}
              setOrder={setOrder}
              setAscending={setAscending}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
