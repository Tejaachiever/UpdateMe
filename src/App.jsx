// src/App.jsx
import React, { useState } from 'react';
import Home from './components/Home.jsx';
import News from './components/news/News.jsx';
import Container from './components/weather/Components/Container/Container.jsx';
import './App.css';


function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'News':
        return <News />;
      case 'Weather':
        return <Container />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <button onClick={() => setActiveTab('Home')}>Home</button>
          <button onClick={() => setActiveTab('News')}>News</button>
          <button onClick={() => setActiveTab('Weather')}>Weather</button>
        </nav>
      </header>
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
