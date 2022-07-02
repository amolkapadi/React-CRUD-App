
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact'
import Navbar from './components/commancom/Navbar';
import PageNotFound from './components/pages/PageNotFound';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import View from './components/users/View';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          <Route path='/users/:id' element={<View /> } />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
