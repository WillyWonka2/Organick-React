import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './components/Routes/AppRoutes';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';


function App() {
  const [isDisplaySatisfies, setIsDisplaySatisfies] = useState(true)

  function checkDisplay(satisfiesDisplay) {
    if (window.innerWidth < satisfiesDisplay) {
      setIsDisplaySatisfies(false)
    } else { setIsDisplaySatisfies(true) }
  }

  useEffect(() => {
    checkDisplay(1440)
    window.addEventListener('resize', () => {
      checkDisplay(1440)
    })
  }, [])

  return (
    <div className="App">
      {isDisplaySatisfies ?
        (<><Header />
          <AppRoutes />
          <Footer /></>) : (<ErrorDisplay />)}

    </div>
  );
}

export default App;
