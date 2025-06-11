import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const canvaUrl = process.env.REACT_APP_CANVA_URL;
    console.log('Environment variables:', process.env);
    console.log('Canva URL from env:', canvaUrl);
    
    if (canvaUrl) {
      window.location.href = canvaUrl;
    } else {
      console.error('Canva URL not found in environment variables');
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>正在跳转到Canva设计页面...</p>
        <p style={{ fontSize: '14px', marginTop: '20px' }}>
          如果页面没有自动跳转，请检查控制台信息
        </p>
      </header>
    </div>
  );
}

export default App; 