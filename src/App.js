import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blogs/Blog';
import Checkout from './Components/Checkout/Checkout';
import HomePage from './Components/Home/HomePage/HomePage';
import Login from './Components/Login/Login';
import NothingFound from './Components/NothingFound/NothingFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="max-width App">

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NothingFound></NothingFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
