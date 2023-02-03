//Libraries
import { Routes, Route } from 'react-router-dom';

//Components
import { Footer } from './components/Footer/Header';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePages';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { TweetPage } from './pages/TweetPage/TweetPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFounPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/tweet/:id' element={<TweetPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
