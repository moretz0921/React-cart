import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from './store/userReducer';

import Header from './components/Header';
import Join from './pages/Join';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const dispatch = useDispatch();
  const { isLoading, currentUser } = useSelector((state) => state.user);
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
      </Routes>
    </>
  );
}

export default App;
