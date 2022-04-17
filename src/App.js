import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import HomePage from './Components/Home/HomePage/HomePage';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
