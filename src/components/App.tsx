// library imports
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

// component imports
import Cart from './Cart/Cart';
import Prestations from './Prestations/Prestations';

// style imports
import '../styles/index.css'

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className='app'>
      <QueryClientProvider client={queryClient}>
        <Prestations />
        <Cart />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default App;