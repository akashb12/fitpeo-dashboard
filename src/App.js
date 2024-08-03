import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Shared/Home';
import DashBoard from './Components/DashBoard';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route index element={<DashBoard />} />
            <Route path='products' element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
