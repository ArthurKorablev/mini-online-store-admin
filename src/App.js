import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPreview from './containers/MainPreview';
import MainLogin from './containers/MainLogin';
import Products from './containers/Products';

import PrivateRoute from './PrivateRoute';
import ProductPreview from './containers/ProductPreview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<MainLogin/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/products' element={<Products/>}/>
            <Route path='/preview' element={<MainPreview/>}/>
            <Route path='product/:id' element={<ProductPreview/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
