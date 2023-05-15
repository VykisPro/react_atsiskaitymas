import './App.css';
import Footer from './components/Footer';
import Register from './components/pages/Register';
import Header from './components/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Post from './components/pages/Post';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/post' element={<Post />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
