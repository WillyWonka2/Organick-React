import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './components/Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Header />
    
        <AppRoutes />

      <Footer />
    </div>
  );
}

export default App;
