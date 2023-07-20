import React from 'react';
import A from './components/A';
import { CounterProvider } from './components/CounterContext';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <A />
      </CounterProvider>
    </div>
  );
}

export default App;
