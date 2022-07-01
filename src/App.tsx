import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";

const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/"./pages/Cart")) ;



function App() {
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/pizza-shop-project" element={<Home />}></Route>
            <Route path="/cart" element={
              <React.Suspense fallback ={<div>Загрузка…</div>}>
                <Cart/>
              </React.Suspense>}>
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
