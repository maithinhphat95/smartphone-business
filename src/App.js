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
import ProducitemListSearch from './pages/customer/SearchItem/ProducitemListSearch';
import PhoneItem from './pages/customer/PhoneItem';
import CarouselPhone from './pages/customer/Carousel-PhoneItem';
import NotFound from './pages/customer/NotFound';
import DetalPhone from './pages/customer/PhoneItem/DetalPhone';
import PricePhone from './pages/customer/PhoneItem/PricePhone';
import ThemeProvider from './components/customer/Context/ThemeProvider';
// import Testt from './features/Account/pages/Register';

function App() {
  return (
  <>
  <ThemeProvider >
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
      <Route path='/search' element={<ProducitemListSearch />} />
      <Route  exact path='/phone' element={<PhoneItem />} />
      {/* path={`${url}/:id`}> */}
      <Route path={`/phone/:producer`} element={<DetalPhone />} />
      {/* <Route path={`/phone/:producer`} element={<DetalPhone />} /> */}
      {/* <Route path='/phone/:descriptionPrice' element={<PricePhone />} /> */}
      <Route path='/phone/phoneitem/id' element={<CarouselPhone />} />
      <Route path='*' element={<NotFound />} />
      
    </Routes>
    </main>
    <Footer />
    {/* <Testt /> */}
     </BrowserRouter>
     </ThemeProvider>
    </>
  );
}

export default App;
