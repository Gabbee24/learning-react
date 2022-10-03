import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './E-commerce/App';
import { UserProvider } from './E-commerce/contexts/user.context';
import { ProductsProvider } from './E-commerce/contexts/products.context';
import reportWebVitals from './reportWebVitals';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root2'));
root.render(
  <>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App/>

        </ProductsProvider>
        
      </UserProvider>
    </BrowserRouter>

  </>
);


reportWebVitals();
