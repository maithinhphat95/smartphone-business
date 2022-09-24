import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/customer/Home';
import Register from './pages/customer/Register';
import Login from './pages/customer/Login';
import Question from './pages/customer/Question';
import Security from './pages/customer/AboutSecurity';
import Header from './layouts/customer/Header';
import Nav from './components/customer/Nav';
import Footer from './layouts/customer/Footer';

function App() {
  return (
  <>
  <BrowserRouter>
    <Header />
    <Nav />
     <main className="main-content">
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/question' element={<Question />} />
      <Route path='/aboutSecurity' element={<Security />} />
    </Routes>
    </main>
    <Footer />
    {/* <Testt /> */}
     </BrowserRouter>
    </>
  );
}

export default App;
