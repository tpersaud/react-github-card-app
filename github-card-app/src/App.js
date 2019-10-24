import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App() {
  let title = "Github Card App"
  return (
    <main>
      <Header title={title} />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
