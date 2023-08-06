import logo from './logo.svg';
import './App.css';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import HeadTail from './Pages/HeadTail';
function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/headandtail' element={<HeadTail></HeadTail>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
