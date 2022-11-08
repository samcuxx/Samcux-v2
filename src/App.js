import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Introduction from './components/Introduction/Introduction';
import Main from './layout/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
