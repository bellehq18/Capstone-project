import React from 'react'
import { Header } from './components/Header';
import { StockInput } from './components/StockInput';
import { StockContext } from './components/StockContext';

function App() {
  return (
    <div className='center'>
      <Header />
      <StockInput />
      <StockContext />
    </div>
  );
}

export default App
