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
        <p>Redirecting to Canva design page...</p>
        <p style={{ fontSize: '14px', marginTop: '20px' }}>
          If the page doesn't redirect automatically, please check the console information
        </p>
      </header>
    </div>
  );
}

export default App; 