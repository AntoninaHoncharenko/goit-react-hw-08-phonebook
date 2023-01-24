import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'GlobalStyles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefresh && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contacts" element={<Contacts />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      )}

      <Toaster />
      <GlobalStyle />
    </>
  );
};
