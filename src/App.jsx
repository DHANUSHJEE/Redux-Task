import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import ConfigureStore from './features/ConfigureStore';
import Product from './components/Product';
import Cart from './components/Card';

const App = () => {
  return (
    <Provider store={ConfigureStore}> {/* Wrap your App with Provider */}
      <div>
        <Product>
          <Cart />
        </Product>
      </div>
    </Provider>
  );
};

export default App;
