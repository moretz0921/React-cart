import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from './store/userReducer';
import { pagination } from './api/getApi';

import Header from './components/Header';
import Footer from './components/Footer';

import Join from './pages/Join';
import Login from './pages/Login';
import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  const initialCartItem = localStorage.getItem('cartState')
    ? JSON.parse(localStorage.getItem('cartState'))
    : [];
  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState(initialCartItem);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [limit, setLimit] = useState(8); // 한페이지당 나타넬 데이터수

  const totalCount = 24; // 총 페이지
  const pageCount = 4; // 화면에 나타날 페이지

  let totalPage = Math.ceil(totalCount / limit);
  let pageGroup = Math.ceil(currentPage / pageCount);
  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  let firstNumber = lastNumber - (pageCount - 1);

  const next = lastNumber + 1;
  const prev = firstNumber - 1;

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchProductData = async () => {
      const result = await pagination(currentPage, limit);
      setProductItems(result);
    };

    fetchProductData();
  }, []);

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
      <Header />
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Main /> : <Navigate to="/login" />}
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
              productItems={productItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalCount={totalCount}
              pageGroup={pageGroup}
              prev={prev}
              next={next}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
