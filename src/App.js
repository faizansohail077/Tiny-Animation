import React from 'react';
import './App.css';
import ContentUx from './component/ContentUx';
import Header from './component/Header';
import Navbar from './component/Navbar';
import ContentCopyWrite from './component/ContentCopyWrite'
import ContentWriting from './component/ContentWriting';
function App() {
  return (
    <div className="App">
      <h1>web animation</h1>
      <Navbar/>
      <Header/>
      <ContentUx/>
      <ContentCopyWrite/>
      <ContentWriting/>
    </div>
  );
}

export default App;
