import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from './store/userReducer';
import { getProductList, pagination } from './api/getApi';

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
  const { currentUser } = useSelector((state) => state.user);

  const initialCartItem = localStorage.getItem('cartState')
    ? JSON.parse(localStorage.getItem('cartState'))
    : [];
  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState(initialCartItem);

  const [tatalProduct, setTotalProduct] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const [ascending, setAscending] = useState('asc');

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(8);

  const totalCount = 34;
  const pageCount = 4;

  let totalPage = Math.ceil(totalCount / limit);
  let pageGroup = Math.ceil(currentPage / pageCount);
  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  let firstNumber = lastNumber - (pageCount - 1);

  const next = lastNumber + 1;
  const prev = firstNumber - 1;

  const fetchProductData = async (orderQuery, ascQuery, currentQuery) => {
    const result = await pagination(orderQuery, ascQuery, currentQuery, limit);
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
      if (!!user) {
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
              pageGroup={pageGroup}
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
