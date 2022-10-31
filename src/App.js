import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Introduction from './components/Introduction/Introduction';
import Main from './layout/Main';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
