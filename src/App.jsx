import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  ErrorPage,
  Home,
  PricePlan,
  PropertiesPage,
  Register,
  Services,
  Contact,
  Faq,
  SharedLayout,
  ProtectedRoute,
  Dashboard,
} from './pages';
// import { Profile } from './components';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Navbar, Profile } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pricing from './Pricing';
import PropertiesPage from './PropertiesPage';


const App = () => {
  return (
    <main className='w-full h-full'>
      <BrowserRouter>
        <Navbar />
        <ToastContainer position='top-center' />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='/properties' element={<PropertiesPage />} />
          </Route>
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<PricePlan />} />
          <Router>
          <Switch>
        <Route path='/' exact component={Pricing} />
        <Route path='/properties' component={PropertiesPage} />
        <Route path='/payment' component={PaymentPage} />
          </Switch>
        </Router>
          <Route path='/faq' element={<Faq />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </main>
  );
};
// In your App.js or routing setup file

export default App;

