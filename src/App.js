import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Breadcrumb from './components/Breadcrumb';
import Imgbackground from './components/bg';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes, useRouteMatch } from 'react-router-dom';
import Home from './features/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Testt from './pages/Testt';
import Question from './pages/Question';
import Security from './pages/AboutSecurity';

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
