import Navbar from "./components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Item from './components/item/Item';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='item/:itmId' element= {<Item />}></Route>
            <Route path='*' element= {<div className="my-5 py-5">Not Found</div>}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
