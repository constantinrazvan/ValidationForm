import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';

import Login from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Provider store={store}>
          <Router>
              <Routes>
                  <Route path={"/"} element={<HomePage />} />
                  <Route path={"/loginpage"} element={<Login />} />
                  <Route path={"/registerpage"} element={<RegisterPage />} />
              </Routes>
          </Router>
        </Provider>
    );
}

export default App;
